import React from "react";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";
import { travelerTypes, crossingTypes } from "contexts/crossing";
import compose from "utils/compose";
import withCrossingContext from "HOC/withCrossingContext";
import withSessionContext from "HOC/withSessionContext";
import withApiService from "HOC/withApiService";
import Link from "components/Link";
import Image from "components/Image";
import profileImage from "images/profile-img.png";
import Icon from "components/Icon";
import Table from "components/Table";
import Columns from "components/Columns";
import Column from "components/Column";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import Textarea from "components/Textarea";
import Form from "components/Form";
import Box from "components/Box";
import Modal from "components/Modal";
import CitizenFields from "containers/Crossing/SearchResult/CitizenFields";
import AlienFields from "containers/Crossing/SearchResult/AlienFields";
import VisitorFields from "containers/Crossing/SearchResult/VisitorFields";
import PageContainer from "components/PageContainer";
import "./SearchResult.css";
import Collapse from "../../../components/Collapse/Collapse";

const { ARRIVAL } = crossingTypes;
const { CITIZEN, PILGRIM, ALIEN, VISITOR } = travelerTypes;

const dependentListHeaders = [
  "include",
  "id",
  "firstName",
  "fatherName",
  "grandfatherName",
  "familyName",
  "status"
];

const mockDependentList = [
  {
    include: false,
    personId: 1,
    firstName: "first-name",
    fatherName: "father-name",
    grandfatherName: "grandfather-name",
    familyName: "family-name",
    status: "status"
  },
  {
    include: false,
    personId: 2,
    firstName: "first-name",
    fatherName: "father-name",
    grandfatherName: "grandfather-name",
    familyName: "family-name",
    status: "status"
  },
  {
    include: false,
    personId: 3,
    firstName: "first-name",
    fatherName: "father-name",
    grandfatherName: "grandfather-name",
    familyName: "family-name",
    status: "status"
  }
];

class SearchResult extends React.Component {
  formEl = React.createRef();
  _setState = this.setState;

  constructor(props) {
    super(props);
    this.state = {
      isSkipBiometricVerification: false,
      title: "",
      currentState: "idle"
    };
  }

  componentDidMount() {
    //todo: remove
    this.props.crossingContext._setState({
      dependents: mockDependentList
    });
    /////////////////////////////////////////
  }

  componentWillUnmount() {
    this._setState = null;
  }

  next = () => {
    const { history } = this.props;

    if (!this.state.isSkipBiometricVerification) {
      history.push(routePaths.crossing.fingerVerification);
      return;
    }
    const { sessionContext, crossingContext } = this.props;
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
              await crossingContext.completeCrossing(false);

              this._setState &&
                this._setState(
                  {
                    currentState: "success"
                  },
                  () => {
                    setTimeout(() => {
                      crossingContext.resetState();
                      history.push(routePaths.crossing.search);
                    }, 1000);
                  }
                );
            }
          } catch (e) {
            sessionContext.addNotification({ message: e });
            this._setState && this._setState({ currentState: "idle" });
          }
        }
      );
  };

  onChange = target => {
    target.name === "isSkipBiometricVerification" &&
      this.setState({
        [target.name]: target.checked
      });
  };

  toggleDependent = personId => {
    let dependents = this.props.crossingContext.dependents.map(d => ({
      ...d,
      active: personId === d.personId ? !d.active : d.active
    }));
    this.props.crossingContext._setState(state => ({
      dependents,
      isDependentsConfirmed: state.isDependentsConfirmed
        ? false
        : state.isDependentsConfirmed
    }));
  };

  selectedDependents = () => {
    const result = this.props.crossingContext.dependents.filter(d => d.active);
    if (result.length > 0) return result;
    return null;
  };

  confirmDependents = () => {
    this.props.crossingContext._setState({
      isDependentsConfirmed: true
    });
  };

  cancelCrossing = async () => {
    const { crossingContext, history } = this.props;

    try {
      await crossingContext.cancelCrossing();
      history.push(routePaths.crossing.search);
    } catch (e) {
      console.error("------error cancelling crossing");
    }
  };

  render() {
    const {
      dependents,
      travelPermissionInfo,
      travelerType,
      crossingType,
      isDependentsConfirmed
    } = this.props.crossingContext;
    const { hasRoles } = this.props.sessionContext;
    const { currentState } = this.state;
    const modalMessage = ((currentState === "loading"
      ? intl.get("searchingMsg")
      : currentState === "success"
        ? crossingType === ARRIVAL
          ? intl.get("entryClearedMsg")
          : intl.get("exitClearedMsg")
        : ""): "");
    const selectedDependents = this.selectedDependents();
    const title = `${intl.get(crossingType || ARRIVAL)} ${intl.get(
      travelerType
    )}`;
    return (
      <PageContainer title={title}>
        <div id="search-result">
          <Columns>
            <Column className="is-narrow" style={{ maxWidth: "224px" }}>
              <Image src={profileImage} />
            </Column>
            <Column>
              <Form forwardRef={this.formEl}>
                {travelerType === CITIZEN && <CitizenFields />}
                {travelerType === ALIEN && <AlienFields />}
                {(travelerType === VISITOR || travelerType === PILGRIM) && (
                  <VisitorFields />
                )}
              </Form>
              <br />
              <Collapse
                isCollapsed={dependents.length === 0}
                label={intl.get("dependentList")}
              >
                <div className="dependents-list-table-container">
                  <Table
                    className="is-fullwidth is-striped is-hoverable"
                    thead={
                      <tr>
                        {dependentListHeaders.map(h => (
                          <th key={h}>{intl.get(h).d(h)}</th>
                        ))}
                      </tr>
                    }
                    tbody={dependents.map(d => {
                      return (
                        <tr key={d.personId}>
                          {dependentListHeaders.map(header => {
                            if (header === "include") {
                              return (
                                <td key={header}>
                                  <Checkbox
                                    checked={d.active}
                                    onChange={() =>
                                      this.toggleDependent(d.personId)
                                    }
                                  />
                                </td>
                              );
                            } else if (header === "id") {
                              return <td key={header}>{d["personId"]}</td>;
                            } else {
                              return <td key={header}>{d[header]}</td>;
                            }
                          })}
                        </tr>
                      );
                    })}
                  />
                </div>
                {selectedDependents && (
                  <div className="dependent-confirm-container">
                    {selectedDependents.length.toString() +
                      " " +
                      intl.get("dependentsSelected").d("dependentsSelected")}
                    &nbsp;&nbsp;
                    <Button
                      disabled={isDependentsConfirmed}
                      className="is-small is-primary"
                      onClick={this.confirmDependents}
                    >
                      {isDependentsConfirmed ? (
                        <span>
                          {intl.get("Confirmed".d("Confirmed"))}
                          &nbsp;
                          <Icon icon="fa fa-check" />
                        </span>
                      ) : (
                        intl.get("Confirm".d("Confirm"))
                      )}
                    </Button>
                  </div>
                )}
              </Collapse>
              <br />
              {travelerType === CITIZEN && (
                <Collapse
                  label={intl.get("travelPermissionInfo")}
                  isCollapsed={!travelPermissionInfo}
                >
                  <Textarea
                    rows="1"
                    disabled
                    value={travelPermissionInfo}
                    name="travelPermissionInfo"
                    style={{ resize: "none" }}
                  />
                </Collapse>
              )}
              <br />
              <Columns>
                <Column className="is-narrow">
                  <Checkbox label={intl.get("printCrossDocument")} />
                </Column>
                {hasRoles("RBC.SKIP.BIOMETRICS.VERIFY") && (
                  <Column>
                    <Checkbox
                      name="isSkipBiometricVerification"
                      onChange={this.onChange}
                      label={intl.get("skipBiometricVerification")}
                    />
                  </Column>
                )}
              </Columns>
              <br />
              <br />
              <br />
              <div className="buttons" style={{ justifyContent: "flex-end" }}>
                <Button
                  className="has-shadow"
                  onClick={this.cancelCrossing}
                  // to={routePaths.crossing.tripInfo}
                >
                  {intl.get("backBtn")}
                </Button>
                <Button
                  className="is-primary has-shadow"
                  onClick={this.next}
                  disabled={selectedDependents && !isDependentsConfirmed}
                >
                  {intl.get("okBtn")}
                </Button>
              </div>
            </Column>
          </Columns>
        </div>
        {(currentState === "loading" || currentState === "success") && (
          <Modal
            hideModal={this.hideModal}
            hideCloseBtn={true}
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
)(SearchResult);
