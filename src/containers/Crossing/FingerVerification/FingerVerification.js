import React from "react";

import intl from "react-intl-universal";
import compose from "utils/compose";
import { crossingTypes } from "contexts/crossing";
import withCrossingContext from "HOC/withCrossingContext";
import withSessionContext from "HOC/withSessionContext";
import withApiService from "HOC/withApiService";
import Ws from "utils/socket";
import Link from "components/Link";
import Image from "components/Image";
import Label from "components/Label";
import Box from "components/Box";
import Icon from "components/Icon";
import Columns from "components/Columns";
import Column from "components/Column";
import Button from "components/Button";
import Modal from "components/Modal";
import PageContainer from "components/PageContainer";
import { routePaths } from "containers/Routes";
import "./FingerVerification.css";

const { ARRIVAL } = crossingTypes;

const biokitUrl = "ws://localhost:6178/BioKit/server";

const wsReadyStates = {
  0: "CONNECTING",
  1: "OPEN",
  2: "CLOSING",
  3: "CLOSED"
};

const operations = {
  INIT_DEVICE: "INIT_DEVICE",
  CAPTURE: "CAPTURE",
  CANCEL_CAPTURE: "CANCEL_CAPTURE",
  START_PREVIEW: "START_PREVIEW"
};

const returnMessages = {
  SUCCESS: "SUCCESS",
  NODEVICE: "NO DEVICE FOUND. PLEASE CONNECT ATLEAST ONE DEVICE"
};

const type = "FINGER";
const position = 13;
const expectedFingersCount = "1";

let ws;

const initialWsState = {
  isDeviceReady: false,
  isCapturing: false,
  isMaxReconnectAttemptsReached: false,
  isCaptureComplete: false,
  message: ""
};

class FingerVerification extends React.Component {
  _setState = this.setState;
  constructor(props) {
    super(props);
    this.state = {
      ...initialWsState,
      finger: "rightIndex",
      imageData: "",
      currentState: "idle"
    };
  }

  initDevice() {
    this._setState &&
      this._setState(
        {
          ...initialWsState
        },
        () => {
          const initMessage = {
            type,
            position,
            operation: operations.INIT_DEVICE,
            needIcaoCropping: true,
            transactionId: new Date().getTime().toString(),
            segmentationRequired: false,
            wsqRequired: false,
            segmentedWsqRequired: false,
            returnCode: 0,
            isEnd: false,
            noTimeout: false,
            isWrongSlap: false
          };
          ws.json(initMessage);
        }
      );
  }

  onOpen = e => {
    console.log("Connected!", e);
    this.initDevice();
  };

  handlePreview(imageData) {
    this._setState && this._setState({ imageData });
  }

  handleCapture({ operation, returnMessage, finalImage }) {
    switch (operation) {
      case operations.CAPTURE:
        if (returnMessage === returnMessages.SUCCESS) {
          this._setState &&
            this._setState(state => ({
              ...initialWsState,
              imageData: finalImage,
              isCaptureComplete: true,
              isDeviceReady: state.isDeviceReady
            }));
        } else if (returnMessage === returnMessages.NODEVICE) {
          this._setState &&
            this._setState(
              {
                message: returnMessage,
                isDeviceReady: false
              },
              () => {
                setTimeout(() => {
                  this.initDevice();
                }, 2000);
              }
            );
        }
        break;

      case operations.CANCEL_CAPTURE:
        this._setState &&
          this._setState(state => ({
            ...initialWsState,
            isDeviceReady: state.isDeviceReady
          }));
        break;

      default:
        break;
    }
  }

  handleInitDevice({ returnMessage }) {
    switch (returnMessage) {
      case returnMessages.SUCCESS:
        this._setState && this._setState({ isDeviceReady: true, message: "" });
        break;

      case returnMessages.NODEVICE:
        this._setState &&
          this._setState(
            {
              message: returnMessage,
              isDeviceReady: false
            },
            () => {
              setTimeout(() => {
                this.initDevice();
              }, 2000);
            }
          );

        break;

      default:
        this._setState && this._setState({ message: "" });
        break;
    }
  }

  onMessage = e => {
    var data = e.data && JSON.parse(e.data);
    console.log("Received:", e, data);

    if (data.operation) {
      switch (data.operation) {
        case operations.INIT_DEVICE:
          this.handleInitDevice(data);
          break;

        case operations.START_PREVIEW:
          this.handlePreview(data.previewImage);
          break;

        case operations.CAPTURE:
          this.handleCapture(data);
          break;

        case operations.CANCEL_CAPTURE:
          this.handleCapture(data);
          break;

        default:
          break;
      }
    }
  };

  onClose = e => {
    console.log("Closed!", e);
    this._setState &&
      this._setState(state => ({
        ...initialWsState,
        isMaxReconnectAttemptsReached: state.isMaxReconnectAttemptsReached
      }));
  };

  onError = e => {
    console.log("Error:", e);
  };

  onReconnect(e) {
    console.log("Reconnecting...", e);
  }

  onMaximum = e => {
    console.log("Max Attempts Reached!", e);
    this._setState &&
      this._setState({
        ...initialWsState,
        isMaxReconnectAttemptsReached: true
      });
  };

  closeWs = () => {
    ws.close();
  };

  startCapture = () => {
    this._setState &&
      this._setState(
        state => ({
          ...initialWsState,
          isCapturing: true,
          isDeviceReady: state.isDeviceReady
        }),
        () => {
          const captureMessage = {
            type,
            position,
            operation: operations.CAPTURE,
            expectedFingersCount,
            needIcaoCropping: true,
            transactionId: new Date().getTime().toString(),
            segmentationRequired: false,
            wsqRequired: false,
            segmentedWsqRequired: false,
            missingFingersList: [],
            returnCode: 0,
            isEnd: false,
            noTimeout: false,
            isWrongSlap: false,
            currentDeviceName: "GUARDIAN 200"
          };
          console.log("-------CAPTURE:", captureMessage);
          ws.json(captureMessage);
        }
      );
  };

  cancelCapture = () => {
    const cancelCaptureMessage = {
      type,
      position,
      operation: operations.CANCEL_CAPTURE,
      needIcaoCropping: true,
      transactionId: new Date().getTime().toString(),
      segmentationRequired: false,
      wsqRequired: false,
      segmentedWsqRequired: false,
      returnCode: 0,
      isEnd: false,
      noTimeout: false,
      isWrongSlap: false,
      currentDeviceName: "GUARDIAN 200"
    };
    console.log("-------CANCEL CAPTURE:", cancelCaptureMessage);
    ws.json(cancelCaptureMessage);
  };

  openWs = () => {
    this._setState &&
      this._setState(
        {
          ...initialWsState
        },
        () => {
          const wsOptions = {
            timeout: 5e3,
            maxAttempts: 6,
            onopen: this.onOpen,
            onmessage: this.onMessage,
            onreconnect: this.onReconnect,
            onmaximum: this.onMaximum,
            onclose: this.onClose,
            onerror: this.onError
          };
          ws = new Ws(biokitUrl, wsOptions);
        }
      );
  };

  componentDidMount() {
    this.openWs();
  }

  componentWillUnmount() {
    this._setState = null;
    this.closeWs();
  }

  changeFinger = finger => this._setState && this._setState({ finger });

  next = () => {
    const { sessionContext, crossingContext, history } = this.props;
    this._setState &&
      this._setState(
        {
          currentState: "loading"
        },
        async () => {
          try {
            const hasHitReports = await crossingContext.searchCWL();
            if (hasHitReports) {
              history.push(routePaths.crossing.hitReport);
            } else {
              await crossingContext.updateTripInfo();
              await crossingContext.completeCrossing(true);
              // await crossingContext.updateCrossing();

              this._setState &&
                this._setState(
                  {
                    currentState: "success"
                  },
                  () => {
                    setTimeout(() => {
                      sessionContext.addNotification({
                        type: "is-success",
                        message: "Crossing completed successfully."
                      });
                      crossingContext.resetState();
                      history.push(routePaths.crossing.search);
                    }, 1000);
                  }
                );
            }
          } catch (e) {
            console.error("------- error next:", e);
            sessionContext.addNotification({
              message: e
            });
            this._setState && this._setState({ currentState: "idle" });
          }
        }
      );
  };

  render() {
    const {
      finger,
      isDeviceReady,
      message,
      isMaxReconnectAttemptsReached,
      isCaptureComplete,
      isCapturing,
      currentState,
      imageData
    } = this.state;
    const {
      travelerType,
      personId,
      firstName,
      fatherName,
      grandfatherName,
      familyName,
      crossingType
    } = this.props.crossingContext;
    const modalMessage = ((currentState === "loading"
      ? intl.get("searchingMsg")
      : currentState === "success"
        ? crossingType === ARRIVAL
          ? intl.get("entryClearedMsg")
          : intl.get("exitClearedMsg")
        : ""): "");
    return (
      <PageContainer
        title={intl.get("fingerVerification").d("fingerVerification")}
      >
        <div id="finger-verification" className="container">
          <Columns>
            <Column className="is-narrow">
              <Label className="is-small">{intl.get("firstName")}</Label>
              <div>{firstName}</div>
            </Column>
            <Column className="is-narrow">
              <Label className="is-small">{intl.get("fatherName")}</Label>
              <div>{fatherName}</div>
            </Column>
            <Column className="is-narrow">
              <Label className="is-small">{intl.get("grandfatherName")}</Label>
              <div>{grandfatherName}</div>
            </Column>
            <Column className="is-narrow">
              <Label className="is-small">{intl.get("familyName")}</Label>
              <div>{familyName}</div>
            </Column>
          </Columns>
          <Columns>
            <Column className="is-narrow">
              <Label className="is-small">{intl.get("idNumber")}</Label>
              <div>{personId}</div>
            </Column>
            <Column className="is-narrow">
              <Label className="is-small">
                {intl.get("idType").d("idType")}
              </Label>
              <div>{travelerType}</div>
            </Column>
          </Columns>
          <div>
            {isDeviceReady ? (
              <React.Fragment>
                <div>
                  <Icon icon="fa fa-check" style={{ color: "limegreen" }} />
                  {intl.get("deviceIsReady")}
                </div>
                <div className="buttons" style={{ marginTop: "1em" }}>
                  <Button
                    onClick={this.startCapture}
                    disabled={isCapturing}
                    className="is-primary has-shadow"
                  >
                    {intl.get("startCapture")}
                  </Button>
                  <Button
                    onClick={this.cancelCapture}
                    className="is-primary has-shadow"
                    disabled={!isCapturing}
                  >
                    {intl.get("cancelCapture")}
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {!isMaxReconnectAttemptsReached && (
                  <div>
                    <Icon icon="fa fa-spinner fa-pulse" />
                    {intl.get("deviceNotReady")}
                  </div>
                )}
                <div style={{ marginTop: "1em" }}>
                  {isMaxReconnectAttemptsReached && (
                    <React.Fragment>
                      <div style={{ marginBottom: ".5em" }}>
                        <Icon icon="fa fa-times" style={{ color: "red" }} />
                        &nbsp;
                        {intl.get("failedToConnect")}
                      </div>
                      <Button
                        onClick={this.openWs}
                        className="is-primary has-shadow"
                      >
                        {intl.get("retryConnection")}
                      </Button>
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            )}
            {message && <div>{message}</div>}
          </div>
          <div style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Box className="fingerprint-box">
              {imageData && (
                <Image src={"data:image/png;base64, " + imageData} />
              )}
            </Box>
          </div>
          <div className="buttons has-addons">
            <Button
              className={finger === "leftIndex" ? "is-primary" : "inactive"}
              onClick={() => this.changeFinger("leftIndex")}
            >
              {intl.get("leftIndex").d("leftIndex")}
            </Button>
            <Button
              className={finger === "rightIndex" ? "is-primary" : "inactive"}
              onClick={() => this.changeFinger("rightIndex")}
            >
              {intl.get("rightIndex").d("rightIndex")}
            </Button>
          </div>
          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Link
              to="/authenticated/crossing/searchresult"
              className="button has-shadow"
            >
              {intl.get("backBtn")}
            </Link>
            <Button
              onClick={this.next}
              className="is-primary has-shadow"
              disabled={!isCaptureComplete}
            >
              {intl.get("okBtn")}
            </Button>
          </div>
        </div>

        {(currentState === "loading" || currentState === "success") && (
          <Modal
            content={
              <Box
                style={{
                  minHeight: "175px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                {currentState === "loading" && (
                  <React.Fragment>
                    <div style={{ textAlign: "center" }}>
                      <Icon icon="fa fa-spinner fa-2x fa-pulse" />
                    </div>
                    <br />
                  </React.Fragment>
                )}
                <div style={{ textAlign: "center" }}>{modalMessage}</div>
              </Box>
            }
          />
        )}
      </PageContainer>
    );
  }
}

export default compose(
  withApiService,
  withSessionContext,
  withCrossingContext
)(FingerVerification);
