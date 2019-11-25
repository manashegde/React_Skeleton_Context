import React from "react";
import moment from "moment";
import {
  travelerTypes,
  crossingTypes,
  crossingActions
} from "contexts/crossing";
import Link from "components/Link";
import { setInputValue } from "utils/helpers";
import compose from "utils/compose";
import withSessionContext from "HOC/withSessionContext";
import withCrossingContext from "HOC/withCrossingContext";
// import withApiService, { makeCrossingUrlFor } from "HOC/withApiService";
import { makeCrossingUrlFor } from "HOC/withApiService";
import Button from "components/Button";
import intl from "react-intl-universal";
import TextField from "components/TextField";
import Label from "components/Label";
import Icon from "components/Icon";
import Form from "components/Form";
import Columns from "components/Columns";
import Column from "components/Column";
import Select from "components/Select";
import PageContainer from "components/PageContainer";
import DatePicker from "components/DatePicker";
import ButtonGroup from "components/ButtonGroup";
import Switch from "components/Switch";
import { routePaths } from "containers/Routes";
import "./Search.css";

const passportTypeOptions = [
  {
    displayName: "normal",
    value: "normal"
  },
  {
    displayName: "diplomatic",
    value: "diplomatic"
  },
  {
    displayName: "special",
    value: "special"
  }
];
const { CITIZEN, PILGRIM, ALIEN, VISITOR } = travelerTypes;
const travelerTypeOptions = [
  {
    displayName: CITIZEN,
    value: CITIZEN
  },
  {
    displayName: ALIEN,
    value: ALIEN
  },
  {
    displayName: VISITOR,
    value: VISITOR
  },
  {
    displayName: PILGRIM,
    value: PILGRIM
  }
];
const { ARRIVAL } = crossingTypes;
const { SEARCH } = crossingActions;
const visaIssuanceOptions = [
  { displayName: "MOI", value: "MOI" },
  { displayName: "MOFA", value: "MOFA" }
];

class Search extends React.Component {
  formEl = React.createRef();
  _setState = this.setState;
  state = {
    currentState: "idle"
  };

  componentDidMount() {
    // this.getLookups();

    //todo: remove
    Array.from(this.formEl.current).forEach(elem => {
      if (elem instanceof HTMLInputElement) {
        const elemName = elem.name;
        if (elemName === "personId") {
          setInputValue(elem, "1119486650");
        }
        if (elemName === "idVersion") {
          setInputValue(elem, "1");
        }
      }
    });
    //////////////////////////////////////////////////////
  }

  getLookups = () => {
    // todo: get all lookups
  };

  selectTravelerType = ({ target }) => {
    this.props.crossingContext._setState({
      travelerType: target.value
    });
  };

  componentWillUnmount() {
    this._setState = null;
  }

  makeSearchTravelerData = () => {
    const { travelerType, crossingType } = this.props.crossingContext;

    let result = {};

    const elems = Array.from(this.formEl.current.elements);

    switch (travelerType) {
      case CITIZEN:
        result.searchCitizenCrossingInput = {
          crossingType: crossingType.toUpperCase()
        };
        elems.forEach(field => {
          const fieldName = field.name;
          const fieldValue = field.value;
          if (
            fieldName === "travelDate" ||
            fieldName === "personId" || //1119486650
            fieldName === "idVersion" //1
          )
            result.searchCitizenCrossingInput[fieldName] = fieldValue;
        });
        return result;

      case VISITOR:
        return {};

      case PILGRIM:
        return {};

      case ALIEN:
        return {
          searchCitizenCrossingInput: {
            personId: 1119486650,
            idVersion: 0,
            crossingType: "ARRIVAL",
            travelDate: "2018-10-03T17:00:00.000-0700"
          }
        };

      default:
        return {};
    }
  };

  searchCrossing = async () => {
    const { crossingContext } = this.props;

    const searchData = this.makeSearchTravelerData();

    const url = makeCrossingUrlFor(
      SEARCH,
      crossingContext.travelerType,
      crossingContext.crossingType
    );
    await crossingContext.searchCrossing({ data: searchData, url });

    // const searchRes = await sessionContext.post({
    //   url: makeCrossingUrlFor(
    //     SEARCH,
    //     crossingContext.travelerType,
    //     crossingContext.crossingType
    //   ),
    //   data: searchData
    // });

    // if (searchRes.xbcErrors) {
    //   searchRes.xbcErrors.forEach(error => {
    //     sessionContext.addNotification({ message: error.desc });
    //   });
    // }

    // if (searchRes.citizenDetailsOutput) {
    //   crossingContext._setState({
    //     ...searchRes.citizenDetailsOutput,
    //     travelDate: searchData.searchCitizenCrossingInput.travelDate
    //   });
    // }
  };

  searchMovements = async () => {
    const { crossingContext, history } = this.props;

    const movements = await crossingContext.searchMovements();

    if (movements.length === 1) {
      history.push(routePaths.crossing.searchResult);
    } else {
      history.push(routePaths.crossing.tripInfo);
    }
  };

  getTravelerId = async () => {
    const {
      apiService: { post, urls },
      crossingContext,
      history
    } = this.props;
    try {
      // const res = await post({
      //   url: "url to get traveler id",
      //   data: {
      //     visaNumber: Array.from(this.formEl.current.elements).filter(
      //       el => el.fieldName === "visaNumber"
      //     )[0].value
      //   }
      // });
      //set traveler id to response
      Array.from(this.formEl.current.elements).some(el => {
        el.name === "personId" && setInputValue(el, "12345");
      });
    } catch (e) {
      console.error("------failed to get traveler id:", e);
    }
  };

  next = () => {
    this._setState &&
      this._setState(
        {
          currentState: "loading"
        },
        async () => {
          const { sessionContext, history } = this.props;
          try {
            await this.searchCrossing();
            await this.searchMovements();
          } catch (e) {
            console.log("---- failed to search:", e);
            sessionContext.addNotification({ message: e.message || e });
          } finally {
            this._setState &&
              this._setState({
                currentState: "idle"
              });
          }
        }
      );
  };

  clearFields = () => {
    Array.from(this.formEl.current.el).forEach(elem => {
      if (elem instanceof HTMLInputElement) {
        elem.name !== "travelDate" && setInputValue(elem, "");
      }
    });
  };

  addVisitor = async () => {
    console.log("----------adding visitor");
  };

  render() {
    const { crossingType, travelerType } = this.props.crossingContext;
    const { hasRoles } = this.props.sessionContext;
    const { currentState } = this.state;
    const title =
      crossingType === ARRIVAL
        ? intl.get("entrySearchTitle")
        : intl.get("exitSearchTitle");
    return (
      <PageContainer title={title}>
        <div id="search" className="container">
          <Form forwardRef={this.formEl} style={{ margin: "0.75rem" }}>
            <Columns>
              <Column className="is-narrow">
                <DatePicker
                  id="travelDate"
                  isOutsideRange={
                    hasRoles("RBC.BC01.CHANGE.XDATE")
                      ? day =>
                          day.isAfter(moment()) ||
                          day.isBefore(moment().subtract(30, "days"))
                      : function() {}
                  }
                  label={<Label>{intl.get("travelDate")}</Label>}
                />
              </Column>
              <Column style={{ display: "flex", alignItems: "flex-end" }}>
                {travelerTypeOptions.map(o => (
                  <Button
                    name="travelerType"
                    value={o.value}
                    onClick={this.selectTravelerType}
                    key={o.value}
                    className={travelerType === o.value ? "is-primary" : ""}
                  >
                    {intl.get(o.displayName)}
                  </Button>
                ))}
              </Column>
            </Columns>
            {(travelerType === VISITOR || travelerType === PILGRIM) && (
              <React.Fragment>
                <Columns>
                  <Column className="is-narrow">
                    <DatePicker
                      disabled={currentState === "loading"}
                      label={<Label>{intl.get("birthDate")}</Label>}
                    />
                  </Column>
                  <Column className="is-narrow">
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <TextField
                        disabled={currentState === "loading"}
                        name="visaNumber"
                        label={<Label>{intl.get("visaNumber")}</Label>}
                      />
                      <a
                        style={{ marginBottom: "0.75rem" }}
                        onClick={this.getTravelerId}
                      >
                        <Icon className="is-medium" icon="fa fa-search" />
                      </a>
                    </div>
                  </Column>
                  {travelerType === VISITOR && (
                    <Column className="is-narrow">
                      <Select
                        options={visaIssuanceOptions.map(o => ({
                          ...o,
                          displayName: intl.get(o.displayName).d(o.displayName)
                        }))}
                        disabled={currentState === "loading"}
                        label={<Label>{intl.get("visaIssuance")}</Label>}
                      />
                    </Column>
                  )}
                </Columns>
              </React.Fragment>
            )}
            <Columns>
              <Column className="is-narrow">
                <TextField
                  disabled={currentState === "loading"}
                  type="number"
                  name="personId"
                  label={<Label>{intl.get("travelerId")}</Label>}
                />
              </Column>
              {travelerType !== VISITOR &&
                travelerType !== PILGRIM && (
                  <Column className="is-narrow">
                    <TextField
                      disabled={currentState === "loading"}
                      name="idVersion"
                      label={<Label>{intl.get("travelerIdVersion")}</Label>}
                    />
                  </Column>
                )}
            </Columns>
            {travelerType === CITIZEN && (
              <Columns>
                <Column className="padding-top-none is-narrow">
                  <TextField
                    disabled={currentState === "loading"}
                    name="passportNumber"
                    label={<Label>{intl.get("passportNumber")}</Label>}
                  />
                </Column>
                <Column className="padding-top-none is-narrow">
                  <Select
                    options={passportTypeOptions.map(o => ({
                      ...o,
                      displayName: intl.get(o.displayName).d(o.displayName)
                    }))}
                    name="passportType"
                    disabled={currentState === "loading"}
                    defaultValue={intl.get("chooseDocumentType")}
                    label={<Label>{intl.get("passportType")}</Label>}
                  />
                </Column>
              </Columns>
            )}
            {(travelerType === ALIEN ||
              travelerType === VISITOR ||
              travelerType === PILGRIM) && (
              <React.Fragment>
                <Columns>
                  <Column className="is-narrow">
                    <TextField
                      disabled={currentState === "loading"}
                      label={<Label>{intl.get("documentNumber")}</Label>}
                    />
                  </Column>
                  {travelerType === VISITOR &&
                    hasRoles("RBC.BC01.AUTH.GEN.DOCO.NUM") && (
                      <Column className="is-narrow">
                        <Switch
                          label={<Label>{intl.get("withoutDocument")}</Label>}
                        />
                      </Column>
                    )}
                </Columns>
                <Columns>
                  <Column className="is-narrow">
                    <TextField
                      label={<Label>{intl.get("nationalityCode")}</Label>}
                    />
                  </Column>
                  <Column className="is-narrow">
                    <Select
                      options={passportTypeOptions.map(o => ({
                        ...o,
                        displayName: intl.get(o.displayName).d(o.displayName)
                      }))}
                      disabled={currentState === "loading"}
                      defaultValue={intl.get("chooseDocumentType")}
                      label={<Label>{intl.get("nationality")}</Label>}
                    />
                  </Column>
                </Columns>
              </React.Fragment>
            )}
            <div
              style={{
                display: "flex",
                justifyContent:
                  crossingType === ARRIVAL &&
                  (travelerType === VISITOR || travelerType === PILGRIM)
                    ? "space-between"
                    : "flex-end",
                marginTop: "2rem"
              }}
            >
              {crossingType === ARRIVAL &&
                (travelerType === VISITOR || travelerType === PILGRIM) && (
                  <Link
                    className="button has-shadow"
                    to={routePaths.crossing.specialSearch}
                  >
                    <Icon icon="fa fa-search" />
                    &nbsp;
                    {intl.get("specialSearch")}
                  </Link>
                )}
              <div className="buttons" style={{ justifyContent: "flex-end" }}>
                <Link className="button has-shadow" to={routePaths.home}>
                  {intl.get("cancelBtn").d("Cancel")}
                </Link>
                {crossingType === ARRIVAL &&
                  (travelerType === VISITOR || travelerType === PILGRIM) && (
                    <React.Fragment>
                      <Button
                        className={
                          "is-primary has-shadow" +
                          (currentState === "loading" ? " is-loading" : "")
                        }
                        onClick={this.addVisitor}
                      >
                        <Icon icon="fa fa-plus" />
                        &nbsp;
                        {intl.get("addVisitor").d("Add Visitor")}
                      </Button>
                    </React.Fragment>
                  )}
                <Button
                  className={
                    "is-primary has-shadow" +
                    (currentState === "loading" ? " is-loading" : "")
                  }
                  disabled={!travelerType}
                  dataTest="search-traveler-btn"
                  onClick={this.next}
                >
                  {intl.get("searchBtn").d("Search")}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </PageContainer>
    );
  }
}

export { Search };

export default compose(
  // withApiService,
  withCrossingContext,
  withSessionContext
)(Search);
