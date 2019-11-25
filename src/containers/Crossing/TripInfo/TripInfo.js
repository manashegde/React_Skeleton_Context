import React from "react";
import { Link } from "react-router-dom";
import compose from "utils/compose";
import withSessionContext from "HOC/withSessionContext";
import withCrossingContext from "HOC/withCrossingContext";
import withApiService, { makeLookupUrl } from "HOC/withApiService";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";
// import Box from "components/Box";
import Icon from "components/Icon";
import TextField from "components/TextField";
import Label from "components/Label";
// import SubTitle from "components/SubTitle";
// import Form from "components/Form";
import Columns from "components/Columns";
import Column from "components/Column";
import Select from "components/Select";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import PageContainer from "components/PageContainer";
import "./TripInfo.css";

const mockCarrierOptions = [
  { value: "Saudi", displayName: "Saudi" },
  { value: "Saudi1", displayName: "Saudi1" },
  { value: "Saudi2", displayName: "Saudi2" }
];

const mockCountryOptions = [
  { value: "Saudi", displayName: "Saudi" },
  { value: "USA", displayName: "USA" },
  { value: "Mexico", displayName: "Mexico" }
];

const defaultMovement = [
  {
    id: Math.random().toString(),
    carrierName: "",
    carrierCode: "",
    countryCode: "",
    carrierDescription: mockCarrierOptions[0].value,
    country: mockCountryOptions[0].value,
    isPrivateFlight: false,
    privateFlightRegistrationNumber: "",
    isEditing: true
  }
];

const mockMovements = [
  {
    id: "1",
    carrierName: "Saudia1",
    carrierCode: "SV321",
    countryCode: "101",
    carrierDescription: "",
    country: "Some Country Name",
    isPrivateFlight: false,
    privateFlightRegistrationNumber: "",
    isEditing: false
  },
  {
    id: "2",
    carrierName: "United Airlines",
    carrierCode: "54321",
    countryCode: "789",
    carrierDescription: "another description",
    country: "Saudi Arabia",
    isPrivateFlight: true,
    privateFlightRegistrationNumber: "",
    isEditing: false
  }
];

const isEditing = "isEditing";

class TripInfo extends React.Component {
  _setState = this.setState;
  constructor(props) {
    super(props);
    const movements = props.crossingContext.movements.length
      ? props.crossingContext.movements
      : defaultMovement;
    this.state = {
      movements: movements.map(m => ({ id: Math.random().toString(), ...m })),
      // movements: mockMovements.map(m => ({id: m.flightNumber, ...m})),
      // movements: defaultMovements,
      // selectedMovmement: "",
      currentState: "idle"
    };
  }

  componentWillUnmount() {
    this._setState = null;
  }

  toggle = (id, prop) => {
    const newMovements = this.state.movements.map(m => {
      if (m.id === id) {
        return { ...m, [prop]: !m[prop] };
      }
      return m;
    });
    this.setState({
      movements: newMovements
    });
  };

  onChange = id => ({ name, value, type }) => {
    try {
      let updatedMovements;
      if (name === "selectedMovement") {
        updatedMovements = this.state.movements.map(m => {
          if (m.id === id) {
            return { ...m, isSelected: !m.isSelected };
          } else {
            return { ...m, isSelected: false };
          }
        });
      } else {
        updatedMovements = this.state.movements.map(m => {
          if (m.id === id) {
            return { ...m, [name]: value };
          } else {
            return m;
          }
        });
      }
      this.setState(
        {
          movements: updatedMovements
        },
        () => {
          console.log("-----new movements:", this.state.movements);
        }
      );
    } catch (e) {
      console.error("--------- onchange trip info:", e, this.state);
    }
  };

  next = () => {
    this.props.crossingContext._setState({
      movements: this.state.movements
    });
    this.props.history.push(routePaths.crossing.searchResult);
  };

  render() {
    const { selectedMovement, currentState, movements } = this.state;
    const {
      sessionContext: { hasRoles },
      history
    } = this.props;

    return (
      <PageContainer title={intl.get("tripInfoTitle")}>
        <div id="trip-info">
          {movements.map(m => (
            <div className="trip-container container" key={m.id}>
              <Columns key={m.id}>
                <Column
                  className={
                    "is-narrow selected-column" +
                    (m.isSelected ? " has-background-success" : "")
                  }
                >
                  <Checkbox
                    name="selectedMovement"
                    onChange={this.onChange(m.id)}
                    checked={m.isSelected}
                  />
                </Column>
                <Column className="is-narrow icon-column">
                  <Icon icon="fa fa-plane fa-2x" />
                </Column>
                <Column>
                  <Columns>
                    <Column>
                      <TextField
                        name={
                          m.isPrivateFlight
                            ? "privateFlightRegistrationNumber"
                            : "carrierCode"
                        }
                        disabled={!m.isEditing}
                        className="is-small"
                        label={
                          <Label className="is-small">
                            {m.isPrivateFlight
                              ? intl.get("privateFlightRegistrationNumber")
                              : intl.get("carrierCode")}
                          </Label>
                        }
                        value={
                          m.isPrivateFlight
                            ? m.privateFlightRegistrationNumber || ""
                            : m.carrierCode
                        }
                        onChange={this.onChange(m.id)}
                      />
                    </Column>
                    <Column>
                      <Label className="is-small">{intl.get("carrier")}</Label>
                      {m.isPrivateFlight ? (
                        <span className="is-size-7">
                          {intl.get("privateFlight")}
                        </span>
                      ) : (
                        <Select
                          options={mockCarrierOptions}
                          className="is-small"
                          name="carrierName"
                          onChange={this.onChange(m.id)}
                          disabled={!m.isEditing}
                        />
                      )}
                    </Column>
                    <Column>
                      <TextField
                        name="countryCode"
                        className="is-small"
                        label={
                          <Label className="is-small">
                            {intl.get("countryCode")}
                          </Label>
                        }
                        disabled={!m.isEditing}
                        onChange={this.onChange(m.id)}
                        value={m.countryCode}
                      />
                    </Column>
                    <Column>
                      <Select
                        options={mockCountryOptions}
                        className="is-small"
                        name="country"
                        onChange={this.onChange(m.id)}
                        disabled={!m.isEditing}
                        label={
                          <Label className="is-small">
                            {intl.get("country")}
                          </Label>
                        }
                      />
                    </Column>
                    <Column className="private-flight-checkbox flexed aligned-center">
                      <Checkbox
                        onChange={() => this.toggle(m.id, "isPrivateFlight")}
                        label={intl.get("privateFlight")}
                        name="isPrivateFlight"
                        checked={m.isPrivateFlight}
                        disabled={!m.isEditing}
                      />
                    </Column>
                  </Columns>
                </Column>
                {hasRoles("RBC.BC01.ALLOW.ENTER.FLIGHT") && (
                  <Column className="is-narrow edit-done-column">
                    <a onClick={() => this.toggle(m.id, isEditing)}>
                      {m.isEditing ? (
                        <span>{intl.get("done")}</span>
                      ) : (
                        <Icon icon="fa fa-pencil-square-o" />
                      )}
                    </a>
                  </Column>
                )}
              </Columns>
            </div>
          ))}

          <div className="buttons container buttons-container">
            <Button className="has-shadow" onClick={history.goBack}>
              {intl.get("backBtn").d("Back")}
            </Button>
            <Button
              className={
                "is-primary has-shadow" +
                (currentState === "loading" ? " is-loading" : "")
              }
              disabled={!movements.some(m => m.isSelected && !m.isEditing)}
              onClick={this.next}
            >
              {intl.get("okBtn").d("OK")}
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
)(TripInfo);
