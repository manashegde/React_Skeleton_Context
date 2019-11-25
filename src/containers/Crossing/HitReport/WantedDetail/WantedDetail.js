import React from "react";
import intl from "react-intl-universal";
import Link from "components/Link";
import withCrossingContext from "HOC/withCrossingContext";
import Columns from "components/Columns";
import Column from "components/Column";
import Label from "components/Label";
import Box from "components/Box";
import Image from "components/Image";
import PageContainer from "components/PageContainer";
import profileImage from "images/profile-img.png";
import "./WantedDetail.css";

class WantedDetail extends React.Component {
  render() {
    const {
      personId = "",
      firstName = "",
      fatherName = "",
      grandfatherName = "",
      familyName = "",
      wantedDisplayResult = {
        orderNumber: "",
        requestingBody: "",
        registrationBody: "",
        actionToBeTaken: ""
      }
      // wantedDisplayResult: {
      //   orderNumber = "",
      //   requestingBody = "",
      //   registrationBody = "",
      //   actionToBeTaken = ""
      // }
    } = this.props.crossingContext;
    return (
      <PageContainer title={intl.get("wantedDetail").d("wantedDetail")}>
        <div className="container" style={{ padding: "20px" }}>
          <Box>
            <Columns>
              <Column
                className="is-narrow image-column"
                style={{ maxWidth: "224px" }}
              >
                <Image src={profileImage} />
              </Column>
              <Column>
                <Columns>
                  <Column className="is-narrow">
                    <Label className="is-small">{intl.get("idNumber")}</Label>
                    <div>{personId}</div>
                  </Column>
                </Columns>
                <Columns>
                  <Column className="is-one-quarter">
                    <Label className="is-small">{intl.get("firstName")}</Label>
                    <div>{firstName}</div>
                  </Column>
                  <Column className="is-one-quarter">
                    <Label className="is-small">{intl.get("fatherName")}</Label>
                    <div>{fatherName}</div>
                  </Column>
                  <Column className="is-one-quarter">
                    <Label className="is-small">
                      {intl.get("grandfatherName")}
                    </Label>
                    <div>{grandfatherName}</div>
                  </Column>
                  <Column className="is-one-quarter">
                    <Label className="is-small">{intl.get("familyName")}</Label>
                    <div>{familyName}</div>
                  </Column>
                </Columns>
                <Columns>
                  <Column className="is-one-quarter">
                    <Label className="is-small">
                      {intl.get("orderNumber").d("orderNumber")}
                    </Label>
                    <div>{wantedDisplayResult.orderNumber}</div>
                  </Column>
                  <Column className="is-one-quarter">
                    <Label className="is-small">
                      {intl.get("requestingBody").d("requestingBody")}
                    </Label>
                    <div>{wantedDisplayResult.requestingBody}</div>
                  </Column>
                  <Column className="is-one-quarter">
                    <Label className="is-small">
                      {intl.get("registrationBody").d("registrationBody")}
                    </Label>
                    <div>{wantedDisplayResult.registrationBody}</div>
                  </Column>
                </Columns>
                <Columns>
                  <Column className="is-one-quarter">
                    <Label className="is-small">
                      {intl.get("actionToBeTaken").d("actionToBeTaken")}
                    </Label>
                    <div>{wantedDisplayResult.actionToBeTaken}</div>
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Box>
          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Link
              className="button has-shadow"
              to="/authenticated/crossing/hitreport"
            >
              {intl.get("backBtn")}
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default withCrossingContext(WantedDetail);
