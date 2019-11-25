import React from "react";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";
import Link from "components/Link";
import withCrossingContext from "HOC/withCrossingContext";
import Columns from "components/Columns";
import Column from "components/Column";
import Icon from "components/Icon";
import Label from "components/Label";
import Table from "components/Table";
import Box from "components/Box";
import Image from "components/Image";
import PageContainer from "components/PageContainer";
import profileImage from "images/profile-img.png";
import "./MiscreantDetail.css";

const passportHeaders = [
  "nationality",
  "passportNumber",
  "issuePlace",
  "issueDate"
];

const similarMiscreantsHeaders = [
  "firstName",
  "fatherName",
  "grandfatherName",
  "familyName",
  " "
];

const actionsToBeTakenHeaders = ["actionToBeTaken", "notifyParty"];

class MiscreantDetail extends React.Component {
  state = {
    viewSimilarMiscreantId: ""
  };

  viewSimilarMiscreant = id => {
    this.setState({
      viewSimilarMiscreantId: id === this.state.viewSimilarMiscreantId ? "" : id
    });
  };
  render() {
    const {
      firstName,
      fatherName,
      grandfatherName,
      familyName,
      personId,
      gender,
      nationality,
      birthDate,
      miscreantDetail: {
        actionsToBeTaken,
        potentialMiscreantName,
        similarMiscreants
      }
    } = this.props.crossingContext;
    const { viewSimilarMiscreantId } = this.state;
    const similarMiscreant = viewSimilarMiscreantId
      ? similarMiscreants.filter(m => (m.id = viewSimilarMiscreantId))[0]
      : null;
    return (
      <PageContainer title={intl.get("miscreantDetail")}>
        <div className="container" style={{ fontSize: ".75rem" }}>
          <Box>
            <Columns>
              <Column
                className={viewSimilarMiscreantId ? "is-narrow" : ""}
                style={{
                  borderRight: viewSimilarMiscreantId
                    ? "1px solid #ddd"
                    : "none"
                }}
              >
                <Columns>
                  <Column
                    className="is-narrow image-column"
                    style={{ maxWidth: "150px" }}
                  >
                    <Image src={profileImage} />
                  </Column>
                  <Column>
                    <Label style={{ borderBottom: "1px solid #ddd" }}>
                      {intl.get("travelerInfo").d("travelerInfo")}
                    </Label>
                    <Columns>
                      <Column>
                        <Label className="is-small">
                          {intl.get("firstName")}
                        </Label>
                        <div>{firstName}</div>
                      </Column>
                      <Column>
                        <Label className="is-small">
                          {intl.get("fatherName")}
                        </Label>
                        <div>{fatherName}</div>
                      </Column>
                    </Columns>
                    <Columns>
                      <Column>
                        <Label className="is-small">
                          {intl.get("grandfatherName")}
                        </Label>
                        <div>{grandfatherName}</div>
                      </Column>
                      <Column>
                        <Label className="is-small">
                          {intl.get("familyName")}
                        </Label>
                        <div>{familyName}</div>
                      </Column>
                    </Columns>
                    <Columns>
                      <Column>
                        <Label className="is-small">
                          {intl.get("idNumber")}
                        </Label>
                        <div>{personId}</div>
                      </Column>
                      <Column>
                        <Label className="is-small">{intl.get("gender")}</Label>
                        <div>{gender}</div>
                      </Column>
                    </Columns>
                    <Columns>
                      <Column>
                        <Label className="is-small">
                          {intl.get("nationality")}
                        </Label>
                        <div>{nationality}</div>
                      </Column>
                      <Column>
                        <Label className="is-small">
                          {intl.get("birthDate")}
                        </Label>
                        <div>{birthDate}</div>
                      </Column>
                    </Columns>
                  </Column>
                </Columns>
                <Table
                  className="is-fullwidth is-striped is-hoverable"
                  style={{ border: "1px solid #eee" }}
                  thead={
                    <tr>
                      {actionsToBeTakenHeaders.map(t => (
                        <th key={t}>{intl.get(t).d(t)}</th>
                      ))}
                    </tr>
                  }
                  tbody={
                    actionsToBeTaken &&
                    actionsToBeTaken.map((a, b) => (
                      <tr key={b}>
                        {actionsToBeTakenHeaders.map((h, x) => (
                          <td key={x}>{a[h]}</td>
                        ))}
                      </tr>
                    ))
                  }
                />
                <Label
                  className="is-small"
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  {intl.get("miscreantPhoneticName").d("miscreantPhoneticName")}
                </Label>
                <Columns>
                  <Column>
                    <Label className="is-small">{intl.get("firstName")}</Label>
                    <div>
                      {potentialMiscreantName &&
                        potentialMiscreantName.firstName}
                    </div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("fatherName")}</Label>
                    <div>
                      {potentialMiscreantName &&
                        potentialMiscreantName.fatherName}
                    </div>
                  </Column>
                  <Column>
                    <Label className="is-small">
                      {intl.get("grandfatherName")}
                    </Label>
                    <div>
                      {potentialMiscreantName &&
                        potentialMiscreantName.grandfatherName}
                    </div>
                  </Column>
                  <Column>
                    <Label className="is-small">{intl.get("familyName")}</Label>
                    <div>
                      {potentialMiscreantName &&
                        potentialMiscreantName.familyName}
                    </div>
                  </Column>
                </Columns>
                <Label
                  className="is-small"
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  {intl
                    .get("miscreantMatchesByPhoneticName")
                    .d("miscreantMatchesByPhoneticName")}
                </Label>
                <Table
                  className="is-fullwidth is-striped is-hoverable"
                  style={{ border: "1px solid #eee" }}
                  thead={
                    <tr>
                      {similarMiscreantsHeaders.map(t => (
                        <th key={t}>{intl.get(t).d(t)}</th>
                      ))}
                    </tr>
                  }
                  tbody={
                    similarMiscreants &&
                    similarMiscreants.map((m, i) => (
                      <tr
                        onClick={() => this.viewSimilarMiscreant(m.id)}
                        key={m.id}
                      >
                        {similarMiscreantsHeaders.map((h, j) => {
                          if (h === " ") {
                            return (
                              <td key={j}>
                                <a>
                                  <Icon icon="fa fa-eye" />
                                </a>
                              </td>
                            );
                          } else {
                            return <td key={j}>{m[h]}</td>;
                          }
                        })}
                      </tr>
                    ))
                  }
                />
              </Column>
              {viewSimilarMiscreantId && (
                <Column style={{ overflow: "auto" }}>
                  <Label style={{ borderBottom: "1px solid #ddd" }}>
                    {intl
                      .get("miscreantByPhoneticName")
                      .d("miscreantByPhoneticName")}
                  </Label>
                  <Columns>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("age").d("age")}
                      </Label>
                      <div>{similarMiscreant.age}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("height").d("height")}
                      </Label>
                      <div>
                        {similarMiscreant.minimumHeight}
                        &nbsp;-&nbsp;
                        {similarMiscreant.maximumHeight}
                      </div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("gender").d("gender")}
                      </Label>
                      <div>{similarMiscreant.gender}</div>
                    </Column>
                  </Columns>
                  <Columns>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("birthDate").d("birthDate")}
                      </Label>
                      <div>{similarMiscreant.birthDateGregorian}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("occupation").d("occupation")}
                      </Label>
                      <div>{similarMiscreant.occupation}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("religion").d("religion")}
                      </Label>
                      <div>{similarMiscreant.religion}</div>
                    </Column>
                  </Columns>
                  <Columns>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("eyesColor").d("eyesColor")}
                      </Label>
                      <div>{similarMiscreant.eyesColor}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("hair").d("hair")}
                      </Label>
                      <div>{similarMiscreant.hair}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("skin").d("skin")}
                      </Label>
                      <div>{similarMiscreant.skin}</div>
                    </Column>
                  </Columns>
                  <Columns>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("nose").d("nose")}
                      </Label>
                      <div>{similarMiscreant.nose}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("face").d("face")}
                      </Label>
                      <div>{similarMiscreant.face}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("bodyType").d("bodyType")}
                      </Label>
                      <div>{similarMiscreant.body}</div>
                    </Column>
                  </Columns>
                  <Columns>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("birthPlace").d("birthPlace")}
                      </Label>
                      <div>{similarMiscreant.birthPlace}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("mothersFirstName").d("mothersFirstName")}
                      </Label>
                      <div>{similarMiscreant.motherFirstName}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl.get("mothersLastName").d("mothersLastName")}
                      </Label>
                      <div>{similarMiscreant.motherLastName}</div>
                    </Column>
                    <Column className="is-one-quarter">
                      <Label className="is-small">
                        {intl
                          .get("distinguishingMarks")
                          .d("distinguishingMarks")}
                      </Label>
                      <div>{similarMiscreant.distinguishingMarks}</div>
                    </Column>
                  </Columns>
                  <Label
                    className="is-small"
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    {intl.get("passports").d("passports")}
                  </Label>
                  <Table
                    className="is-fullwidth is-striped is-hoverable"
                    thead={
                      <tr>
                        {passportHeaders.map(t => (
                          <th key={t}>{intl.get(t).d(t)}</th>
                        ))}
                      </tr>
                    }
                    tbody={
                      similarMiscreant.miscreantPassports &&
                      similarMiscreant.miscreantPassports.map((p, i) => (
                        <tr key={i}>
                          {passportHeaders.map((h, j) => (
                            <td key={j}>{p[h]}</td>
                          ))}
                        </tr>
                      ))
                    }
                  />
                </Column>
              )}
            </Columns>
          </Box>

          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Link
              className="button has-shadow"
              to={routePaths.crossing.hitReport}
            >
              {intl.get("backBtn")}
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default withCrossingContext(MiscreantDetail);
