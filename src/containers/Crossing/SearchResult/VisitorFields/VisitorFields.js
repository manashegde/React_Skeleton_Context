import React from "react";
import intl from "react-intl-universal";
import TextField from "components/TextField";
import Label from "components/Label";
import Columns from "components/Columns";
import Column from "components/Column";
import SubTitle from "components/SubTitle";
import Checkbox from "components/Checkbox";
import Select from "components/Select";
import withCrossingContext from "HOC/withCrossingContext";

const AlienFields = () => (
  <React.Fragment>
    <Columns>
      <Column style={{ borderRight: "1px solid rgba(0, 0, 0, 0.1)" }}>
        <Columns>
          <Column className="is-one-fourth">
            <TextField
              name="travelerId"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("travelerId")}</Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <TextField
              name="moiOrderNumber"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("moiOrderNumber")}</Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <TextField
              name="omraPermit"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("omraPermit")}</Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <Select
              options={[{ value: "normal", displayName: "normal" }]}
              className="is-small"
              name="visitorType"
              label={
                <Label className="is-small">{intl.get("visitorType")}</Label>
              }
            />
          </Column>
        </Columns>
        <Columns>
          <Column className="is-one-fourth">
            <TextField
              name="firstName"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("firstName")}</Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <TextField
              name="fatherName"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("fatherName")}</Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <TextField
              name="grandfatherName"
              className="is-small"
              label={
                <Label className="is-small">
                  {intl.get("grandfatherName")}
                </Label>
              }
            />
          </Column>
          <Column className="is-one-fourth">
            <TextField
              name="familyName"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("familyName")}</Label>
              }
            />
          </Column>
        </Columns>
        <div style={{ marginBottom: "0.5em" }}>
          <Label className="is-small">Translated Name</Label>
        </div>
        <Columns>
          <Column className="is-one-fourth">
            <TextField name="translatedFirstName" className="is-small" />
          </Column>
          <Column className="is-one-fourth">
            <TextField name="translatedFatherName" className="is-small" />
          </Column>
          <Column className="is-one-fourth">
            <TextField name="translatedGrandfatherName" className="is-small" />
          </Column>
          <Column className="is-one-fourth">
            <TextField name="translatedFamilyName" className="is-small" />
          </Column>
        </Columns>
      </Column>
      <Column>
        <Columns>
          <Column className="is-narrow">
            <Label className="is-small">{intl.get("travelDate")}</Label>
            <div>travel date</div>
          </Column>
          <Column className="is-narrow">
            <Select
              options={[
                { value: "journalist", displayName: "journalist" },
                { value: "painter", displayName: "painter" },
                { value: "artist", displayName: "artist" }
              ]}
              className="is-small"
              name="exitEntryVisitorDescription"
              label={
                <Label className="is-small">
                  {intl.get("exitEntryVisitorDescription")}
                </Label>
              }
            />
          </Column>
        </Columns>
        <Columns>
          <Column className="is-narrow">
            <TextField
              name="exitEntryCarrierNumber"
              className="is-small"
              label={
                <Label className="is-small">
                  {intl.get("exitEntryCarrierNumber")}
                </Label>
              }
            />
          </Column>
          <Column className="is-narrow">
            <TextField
              name="exitEntryCarrierName"
              className="is-small"
              label={
                <Label className="is-small">
                  {intl.get("exitEntryCarrierName")}
                </Label>
              }
            />
          </Column>
        </Columns>
        <Columns>
          <Column className="is-narrow">
            <TextField
              value="123456790"
              name="translatedFamilyName"
              className="is-small"
              label={
                <Label className="is-small">{intl.get("documentNumber")}</Label>
              }
            />
            {/* <Label className="is-small">{intl.get("documentNumber")}</Label>
            <div>12344567</div> */}
          </Column>
          <Column className="is-narrow">
            <Label className="is-small">{intl.get("documentExpiryDate")}</Label>
            <div>12344567</div>
          </Column>
        </Columns>
      </Column>
    </Columns>
    {/* </Columns> */}

    {/* <Columns>
      <Column>
        <TextField
          disabled
          name="fatherName"
          label={<Label>{intl.get("fatherName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="grandfatherName"
          label={<Label>{intl.get("grandfatherName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="familyName"
          label={<Label>{intl.get("familyName")}</Label>}
        />
      </Column>
    </Columns>

    <div>
      <SubTitle
        is="6"
        style={{
          textAlign: "left",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          marginBottom: "5px"
        }}
      >
        {intl.get("translatedName")}
      </SubTitle>
    </div>

    <Columns>
      <Column>
        <TextField
          disabled
          name="translatedFirstName"
          label={<Label>{intl.get("translatedFirstName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="translatedFatherName"
          label={<Label>{intl.get("translatedFatherName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="translatedGrandFatherName"
          label={<Label>{intl.get("translatedGrandFatherName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="translatedFamilyName"
          label={<Label>{intl.get("translatedFamilyName")}</Label>}
        />
      </Column>
    </Columns>

    <Columns>
      <Column>
        <TextField
          disabled
          name="birthDate"
          label={<Label>{intl.get("birthDate")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="gender"
          label={<Label>{intl.get("gender")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="status"
          label={<Label>{intl.get("status")}</Label>}
        />
      </Column>
    </Columns>

    <Columns>
      <Column>
        <TextField
          disabled
          name="nationalityCode"
          label={<Label>{intl.get("nationalityCode")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="nationalityName"
          label={<Label>{intl.get("nationalityName")}</Label>}
        />
      </Column>
    </Columns>

    <Columns>
      <Column>
        <TextField
          disabled
          name="visaNumber"
          label={<Label>{intl.get("visaNumber")}</Label>}
        />
      </Column>
      <Column
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Checkbox name="isIssueNewVisa" label={intl.get("isIssueNewVisa")} />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaTypeNumber"
          label={<Label>{intl.get("visaTypeNumber")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaTypeName"
          label={<Label>{intl.get("visaTypeName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaIssueDate"
          label={<Label>{intl.get("visaIssueDate")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaPayment"
          label={<Label>{intl.get("visaPayment")}</Label>}
        />
      </Column>
    </Columns>

    <Columns>
      <Column>
        <TextField
          disabled
          name="visaStayingDays"
          label={<Label>{intl.get("visaStayingDays")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaCountryCode"
          label={<Label>{intl.get("visaCountryCode")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaCountryName"
          label={<Label>{intl.get("visaCountryName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaValidityDays"
          label={<Label>{intl.get("visaValidityDays")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaAmountToP"
          label={<Label>{intl.get("visaAmountToP")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaComment"
          label={<Label>{intl.get("visaComment")}</Label>}
        />
      </Column>
    </Columns>

    <Columns>
      <Column>
        <TextField
          disabled
          name="visaIssuePlaceNumber"
          label={<Label>{intl.get("visaIssuePlaceNumber")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaIssuePlaceName"
          label={<Label>{intl.get("visaIssuePlaceName")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaSponsorNationality"
          label={<Label>{intl.get("visaSponsorNationality")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="visaSponsorFullName"
          label={<Label>{intl.get("visaSponsorFullName")}</Label>}
        />
      </Column>
    </Columns>
    <Columns>
      <Column>
        <TextField
          disabled
          name="exitEntryTravelDate"
          label={<Label>{intl.get("exitEntryTravelDate")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="exitEntryCountryCode"
          label={<Label>{intl.get("exitEntryCountryCode")}</Label>}
        />
      </Column>
      <Column>
        <TextField
          disabled
          name="exitEntryCountryName"
          label={<Label>{intl.get("exitEntryCountryName")}</Label>}
        />
      </Column>
    </Columns>
    <Columns> */}
    {/* <Column>
        <Select
          options={[
            { value: "journalist", displayName: "journalist" },
            { value: "painter", displayName: "painter" },
            { value: "artist", displayName: "artist" }
          ]}
          name="exitEntryVisitorDescription"
          label={<Label>{intl.get("exitEntryVisitorDescription")}</Label>}
        />
      </Column>

    </Columns> */}
  </React.Fragment>
);

export default withCrossingContext(AlienFields);
