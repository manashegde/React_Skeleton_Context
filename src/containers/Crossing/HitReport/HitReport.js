import React from "react";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";

import { crossingActions } from "contexts/crossing";
import { urls, makeCrossingUrlFor } from "HOC/withApiService";
import compose from "utils/compose";
import Link from "components/Link";
import Radio from "components/Radio";
import Columns from "components/Columns";
import Column from "components/Column";
import Button from "components/Button";
import Label from "components/Label";
import Table from "components/Table";
import Icon from "components/Icon";
import Image from "components/Image";
import withSessionContext from "HOC/withSessionContext";
import withCrossingContext from "HOC/withCrossingContext";
import withApiService from "HOC/withApiService";
import Form from "components/Form";
import PageContainer from "components/PageContainer";
import profileImage from "images/profile-img.png";
import "./HitReport.css";

const { COMPLETE, UPDATE } = crossingActions;

const hitReportHeaders = [
  "sourceId",
  "borderHitType",
  "samisId",
  "hitAction",
  "name",
  "nationality",
  "birthDateH",
  "birthDateG",
  " "
];

const mockCwlHitOutput = [
  {
    sourceId: Math.random().toString(),
    hitType: "miscreant",
    samisId: Math.random().toString(),
    hitAction: Math.random().toString(),
    name: Math.random().toString(),
    nationality: Math.random().toString(),
    birthDateH: Math.random().toString(),
    birthDateG: Math.random().toString()
  },
  {
    sourceId: Math.random().toString(),
    hitType: "wanted",
    samisId: Math.random().toString(),
    hitAction: Math.random().toString(),
    name: Math.random().toString(),
    nationality: Math.random().toString(),
    birthDateH: Math.random().toString(),
    birthDateG: Math.random().toString()
  },
  {
    sourceId: Math.random().toString(),
    hitType: "afis",
    samisId: Math.random().toString(),
    hitAction: Math.random().toString(),
    name: Math.random().toString(),
    nationality: Math.random().toString(),
    birthDateH: Math.random().toString(),
    birthDateG: Math.random().toString()
  }
];

class HitReport extends React.Component {
  _setState = this.setState;
  formEl = React.createRef();
  state = {
    cwlHitOutput: this.props.crossingContext.cwlHitOutput,
    isViewingHitDetail: false,
    selectedClearance: "",
    currentState: "idle"
  };

  componentWillUnmount() {
    this._setState = null;
  }

  onChange = target => {
    if (target.type === "radio") {
      this._setState &&
        this._setState(
          {
            selectedClearance: target.name
          },
          () => {
            console.log("new state:", this.state);
          }
        );
    }
  };

  updateCwl = async () => {
    const { post } = this.props.sessionContext;

    return await post({
      method: "PUT",
      url: urls.crossing.updateCwl,
      contentType: "application/json",
      data: {
        cWLHitInput: {
          personId: 9999,
          personType: "CITIZEN"
        }
      }
    });
  };

  completeCrossing = async () => {
    const {
      sessionContext: { addNotification },
      crossingContext,
      history
    } = this.props;
    this._setState &&
      this._setState(
        {
          currentState: "loading"
        },
        async () => {
          const { selectedClearance } = this.state;
          try {
            if (selectedClearance === "notClear") {
              this.cancelCrossing();
              return;
            } else if (selectedClearance === "clear") {
              await this.updateCwl();
              await crossingContext.updateTripInfo();
              await crossingContext.completeCrossing(false); // [cancelArrival | cancelDeparture]: false
            }
            crossingContext.resetState();
            history.push(routePaths.crossing.search);
          } catch (e) {
            addNotification({ message: e });
            this._setState &&
              this._setState({
                currentState: "idle"
              });
          }
        }
      );
  };

  viewHitDetail = async rowIdx => {
    const {
      apiService: { post, urls },
      crossingContext,
      history
    } = this.props;

    const { sourceId, borderHitType } = this.state.cwlHitOutput[rowIdx];
    const hitType = borderHitType.toLowerCase();
    //todo: remove
    //todo: handle each hit type appropriately
    if (hitType.includes("miscreant")) {
      history.push(routePaths.crossing.miscreantDetail);
    } else if (hitType.includes("wanted")) {
      history.push(routePaths.crossing.wantedDetail);
    } else if (hitType.includes("afis")) {
      history.push(routePaths.crossing.afisDetail);
    }
    return;
    /////////////////////////////////////////////////

    const res = await post({
      url: urls.crossing.searchCwlDetails,
      data: { sourceId }
    });

    if (res.miscreantDetail) {
      if (res.miscreantDetail.similarMiscreants) {
        res.miscreantDetail.similarMiscreants = res.miscreantDetail.similarMiscreants.map(
          m => ({ ...m, id: Math.random().toString() })
        );
      }
      crossingContext._setState({
        miscreantDetail: res.miscreantDetail
      });
      history.push(routePaths.crossing.miscreantDetail);
    } else if (res.wantedDisplayResult) {
      crossingContext._setState({
        wantedDisplayResult: res.wantedDisplayResult
      });
      history.push(routePaths.crossing.wantedDetail);
    }
  };

  isClearDisabled = () => {
    const { hasRoles } = this.props.sessionContext;
    const { cwlHitOutput } = this.props.crossingContext;

    if (this.state.currentState === "loading") return true;

    if (!hasRoles("RBC.CROSS.WITH.SERIOUS.CWL.HIT")) return true;

    if (
      !hasRoles("RBC.CLEAR.MISC.ID") &&
      cwlHitOutput.some(b =>
        b.hitType.toLowerCase().includes("miscreant by id")
      )
    )
      return true;

    if (
      !hasRoles("RBC.CLEAR.MISC.ID.DENY") &&
      cwlHitOutput.some(b =>
        b.hitAction.toLowerCase().includes("prevent entry/exit")
      )
    ) {
      return true;
    }

    return false;
  };

  cancelCrossing = () => {
    this.props.crossingContext.resetState();
    this.props.history.push(routePaths.crossing.search);
  };

  render() {
    const {
      selectedClearance,
      currentState,
      states,
      isViewingHitDetail
    } = this.state;
    const {
      cwlHitOutput,
      firstName,
      fatherName,
      grandfatherName,
      familyName,
      personId,
      gender,
      nationality,
      birthDate
    } = this.props.crossingContext;
    return (
      <PageContainer title={intl.get("consolidatedHitReport")}>
        <div className="container" id="hit-report">
          <Columns className="traveler-container">
            <Column className="is-narrow red-column" />
            <Column className="is-narrow image-column">
              <Image src={profileImage} />
            </Column>
            <Column style={{ overflow: "auto" }}>
              <Form forwardRef={this.formEl}>
                <Columns>
                  <Column>
                    <Label className="is-small">{intl.get("firstName")}</Label>
                    <div>{firstName}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("fatherName")}</Label>
                    <div>{fatherName}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">
                      {intl.get("grandfatherName")}
                    </Label>
                    <div>{grandfatherName}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("familyName")}</Label>
                    <div>{familyName}</div>
                  </Column>
                </Columns>
                <Columns>
                  <Column>
                    <Label className="is-small">{intl.get("idNumber")}</Label>
                    <div>{personId}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("gender")}</Label>
                    <div>{gender}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">
                      {intl.get("nationality")}
                    </Label>
                    <div>{nationality}</div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("birthDate")}</Label>
                    <div>{birthDate}</div>
                  </Column>
                </Columns>
                <hr />
                <Columns>
                  <Column style={{ overflow: "auto" }}>
                    <div className="hit-report-list-table-container">
                      {Array.isArray(cwlHitOutput) && (
                        <Table
                          className="is-fullwidth is-striped is-hoverable"
                          thead={
                            <tr>
                              {hitReportHeaders.map(t => (
                                <th key={t}>{intl.get(t).d(t)}</th>
                              ))}
                            </tr>
                          }
                          tbody={cwlHitOutput.map((row, rowIdx) => {
                            return (
                              <tr key={rowIdx}>
                                {hitReportHeaders.map((k, tdIdx) => (
                                  <td key={tdIdx}>
                                    {k === " " ? (
                                      <a
                                        onClick={() =>
                                          this.viewHitDetail(rowIdx)
                                        }
                                      >
                                        <Icon icon="fa fa-eye" />
                                      </a>
                                    ) : (
                                      row[k]
                                    )}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        />
                      )}
                    </div>
                  </Column>
                </Columns>
                <br />
                <div className="clearance-container">
                  <Label className="is-small">{intl.get("clearance")}</Label>
                  <Columns>
                    <Column className="is-narrow">
                      <Radio
                        name="clear"
                        label={intl.get("clear")}
                        checked={selectedClearance === "clear"}
                        disabled={this.isClearDisabled()}
                        onChange={this.onChange}
                      />
                    </Column>
                    <Column>
                      <Radio
                        name="notClear"
                        label={intl.get("notClear")}
                        checked={selectedClearance === "notClear"}
                        disabled={this.isClearDisabled()}
                        onChange={this.onChange}
                      />
                    </Column>
                  </Columns>
                </div>
              </Form>
            </Column>
          </Columns>
          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Button
              className={
                "is-primary has-shadow" +
                (currentState === "loading" ? " is-loading" : "")
              }
              disabled={!this.state.selectedClearance}
              onClick={this.completeCrossing}
            >
              {intl.get("completeCrossing")}
            </Button>
            <Button className="has-shadow" onClick={this.cancelCrossing}>
              {intl.get("cancelCrossing")}
            </Button>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default compose(
  withApiService,
  withCrossingContext,
  withSessionContext
)(HitReport);
