import React from "react";
import intl from "react-intl-universal";
import TextField from "components/TextField";
import Label from "components/Label";
import Columns from "components/Columns";
import Column from "components/Column";
import Select from "components/Select";
import Switch from "components/Switch";
import withCrossingContext from "HOC/withCrossingContext";
import "./CitizenFields.css";

const crossingStatusOptions = [
  { value: " ", displayName: " " },
  { value: "deadBuriedInsideKsa", displayName: "deadBuriedInsideKsa" },
  { value: "deadBuriedOutsideKsa", displayName: "deadBuriedOutsideKsa" }
];

const travelPassReasonOptions = [
  { value: " ", displayName: " " },
  { value: "passportIsLost", displayName: "passportIsLost" },
  { value: "passportIsStolen", displayName: "passportIsStolen" },
  { value: "backWithoutHOH", displayName: "backWithoutHOH" },
  { value: "idLost", displayName: "idLost" }
];

class CitizenFields extends React.Component {
  onChange = ({ name, value, checked }) => {
    this.props.crossingContext._setState({
      [name]: name === "hohNotCrossing" ? checked : value
    });
  };

  render() {
    const {
      firstName,
      fatherName,
      grandfatherName,
      familyName,
      personId,
      occupation,
      birthDate,
      passportNumber,
      passportType,
      passportStatus,
      travelPassReason,
      travelPassNumber,
      crossingStatus,
      hohNotCrossing,
      hohId,
      hohStatus,
      hohFullName,
      travelDate,
      movements
      // selectedMovement
    } = this.props.crossingContext;
    const {
      countryCode = "",
      flightNumber = "",
      country = "",
      origDestCountry = "",
      carrierCode = "",
      carrierDescription = "",
      carrierType = ""
    } =
      movements.length === 1
        ? movements[0]
        : movements.filter(m => m.isSelected)[0] || {};

    return (
      <div className="citizenFields-container">
        <Columns className="citizen-fields-columns">
          <Column style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("firstName")}</Label>
                <div>{firstName}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("fatherName")}</Label>
                <div>{fatherName}</div>
              </Column>
            </Columns>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">
                  {intl.get("grandfatherName")}
                </Label>
                <div>{grandfatherName}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("familyName")}</Label>
                <div>{familyName}</div>
              </Column>
            </Columns>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("birthDate")}</Label>
                <div>{birthDate}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("idNumber")}</Label>
                <div>{personId}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("occupation")}</Label>
                <div>{occupation}</div>
              </Column>
            </Columns>
          </Column>
          <Column>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("travelDate")}</Label>
                <div>{travelDate}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("countryCode")}</Label>
                <div>{countryCode}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("country")}</Label>
                <div>{origDestCountry}</div>
              </Column>
            </Columns>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("passportNumber")}</Label>
                <div>{passportNumber}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("passportType")}</Label>
                <div>{passportType}</div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("passportStatus")}</Label>
                <div>{passportStatus}</div>
              </Column>
            </Columns>
            <Columns>
              <Column className="is-one-third">
                <Label className="is-small">{intl.get("carrier")}</Label>
                <div>
                  {carrierCode}
                  {flightNumber}
                </div>
              </Column>
              <Column className="is-one-third">
                <Label className="is-small">
                  {intl.get("carrierDescription")}
                </Label>
                <div>{`${carrierDescription} ${carrierType}`}</div>
              </Column>
            </Columns>
          </Column>
        </Columns>
        <Columns>
          <Column>
            <div className="hohIsNotCrossing-container">
              <Switch
                label={
                  <Label className="is-small">
                    {intl.get("hohIsNotCrossing").d("hohIsNotCrossing")}
                  </Label>
                }
                name="hohNotCrossing"
                checked={hohNotCrossing}
                onChange={this.onChange}
              />
            </div>
          </Column>
          <Column>
            <Label className="is-small">{intl.get("hohId")}</Label>
            <div>{hohId}</div>
          </Column>
          <Column>
            <Label className="is-small">{intl.get("hohStatus")}</Label>
            <div>{hohStatus}</div>
          </Column>
          <Column>
            <Label className="is-small">{intl.get("hohFullName")}</Label>
            <div>{hohFullName}</div>
          </Column>
        </Columns>
        <Columns>
          <Column className="is-narrow">
            <TextField
              name="travelPassNumber"
              className="is-small"
              onChange={this.onChange}
              label={
                <Label className="is-small">
                  {intl.get("travelPassNumber")}
                </Label>
              }
            />
          </Column>
          <Column className="is-narrow">
            <Select
              options={crossingStatusOptions.map(s => ({
                ...s,
                displayName: intl.get(s.displayName)
              }))}
              onChange={this.onChange}
              className="is-small"
              name="crossingStatus"
              label={
                <Label className="is-small">{intl.get("crossingStatus")}</Label>
              }
            />
          </Column>
          <Column className="is-narrow">
            <Select
              options={travelPassReasonOptions.map(t => ({
                ...t,
                displayName: intl.get(t.displayName)
              }))}
              onChange={this.onChange}
              className="is-small"
              name="travelPassReason"
              label={
                <Label className="is-small">
                  {intl.get("travelPassReason")}
                </Label>
              }
            />
          </Column>
        </Columns>
      </div>
    );
  }
}

export default withCrossingContext(CitizenFields);
