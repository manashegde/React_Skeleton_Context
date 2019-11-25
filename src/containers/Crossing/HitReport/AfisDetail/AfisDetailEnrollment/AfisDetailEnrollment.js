import React from "react";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";
import Link from "components/Link";
import withCrossingContext from "HOC/withCrossingContext";
import Columns from "components/Columns";
import Column from "components/Column";
import Label from "components/Label";
import Box from "components/Box";
import Image from "components/Image";
import PageContainer from "components/PageContainer";
import profileImage from "images/profile-img.png";
import "./AfisDetailEnrollment.css";

class AfisDetailEnrollment extends React.Component {
  render() {
    return (
      <PageContainer title={intl.get("afisDetailEnrollment")}>
        <div
          id="afis-details-enrollment"
          className="container"
          style={{ fontSize: ".75rem" }}
        >
          <Box>
            <Label>{intl.get("verifyDetails")}</Label>
            <Columns>
              <Column className="is-narrow">
                <Image src={profileImage} style={{ maxWidth: "250px" }} />
              </Column>
              <Column>
                <Columns>
                  <Column className="detail-column">
                    <div>
                      <Label className="is-small">{intl.get("idType")}</Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("fatherAndGrandfatherNames")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("birthPlace")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("birthDateG")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("sponsorAddressId")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("visaNumber")}
                      </Label>
                      abcd
                    </div>
                  </Column>
                  <Column className="detail-column">
                    <div>
                      <Label className="is-small">{intl.get("idNumber")}</Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("firstAndFamilyNames")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("subtribeName")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("birthDateH")}
                      </Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">{intl.get("gender")}</Label>
                      abcd
                    </div>
                    <div>
                      <Label className="is-small">
                        {intl.get("passportNumber")}
                      </Label>
                      abcd
                    </div>
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Box>

          <div className="buttons">
            <Link
              className="button has-shadow"
              to={routePaths.crossing.afisDetail}
            >
              {intl.get("backBtn")}
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default withCrossingContext(AfisDetailEnrollment);
