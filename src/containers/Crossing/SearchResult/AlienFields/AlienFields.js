import React from "react";
import intl from "react-intl-universal";
import TextField from "components/TextField";
import Label from "components/Label";
import Columns from "components/Columns";
import Column from "components/Column";
import Button from "components/Button";
// import Select from "components/Select";
import withCrossingContext from "HOC/withCrossingContext";

const borderStyle = "1px solid #eee";

const AlienFields = ({ crossingContext }) => {
  const {
    firstName,
    fatherName,
    grandfatherName,
    familyName,
    alienId,
    alienIdVersion,
    alienIdStatus,
    visaNumber,
    visaIssuePlace,
    visaType,
    visaFinalReturnDate,
    visaDepartureDate,
    travelDate,
    travelCountryCode,
    travelCountryName,
    passportNumber,
    passportNationality,
    passportStatus,
    passportExpiryDate,
    carrier,
    carrierDescription
  } = crossingContext;
  return (
    <React.Fragment>
      <Columns>
        <Column style={{ borderRight: borderStyle }}>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("firstName")}</Label>
              {firstName}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("fatherName")}</Label>
              {fatherName}
            </Column>
          </Columns>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("grandfatherName")}</Label>
              {grandfatherName}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("familyName")}</Label>
              {familyName}
            </Column>
          </Columns>

          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("alienId")}</Label>
              {alienId}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("alienIdVersion")}</Label>
              {alienIdVersion}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("alienIdStatus")}</Label>
              {alienIdStatus}
            </Column>
          </Columns>
        </Column>
        <Column>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("travelDate")}</Label>
              {travelDate}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("travelCountryCode")}
              </Label>
              {travelCountryCode}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("travelCountryName")}
              </Label>
              {travelCountryName}
            </Column>
          </Columns>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("carrier")}</Label>
              {carrier}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("carrierDescription")}
              </Label>
              {carrierDescription}
            </Column>
          </Columns>
        </Column>
      </Columns>
      <Columns style={{ borderTop: borderStyle }}>
        <Column style={{ borderRight: borderStyle }}>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("visaNumber")}</Label>
              {visaNumber}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("visaIssuePlace")}</Label>
              {visaIssuePlace}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("visaType")}</Label>
              {visaType}
            </Column>
          </Columns>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("visaFinalReturnDate")}
              </Label>
              {visaFinalReturnDate}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("visaDepartureDate")}
              </Label>
              {visaDepartureDate}
            </Column>
          </Columns>
        </Column>
        <Column>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("passportNumber")}</Label>
              {passportNumber}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">{intl.get("passportStatus")}</Label>
              {passportStatus}
            </Column>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("passportExpiryDate")}
              </Label>
              {passportExpiryDate}
            </Column>
          </Columns>
          <Columns>
            <Column className="is-one-third">
              <Label className="is-small">
                {intl.get("passportNationality")}
              </Label>
              {passportNationality}
            </Column>
          </Columns>
        </Column>
      </Columns>
    </React.Fragment>
  );
};

export default withCrossingContext(AlienFields);
