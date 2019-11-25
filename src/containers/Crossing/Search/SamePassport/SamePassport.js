import React from "react";
import intl from "react-intl-universal";
import PageContainer from "components/PageContainer";
import Column from "components/Column";
import Columns from "components/Columns";
import Button from "components/Button";
import TextField from "components/TextField";
import Table from "components/Table";
import Label from "components/Label";
import Select from "components/Select";
import DatePicker from "components/DatePicker";
import Icon from "components/Icon";
import Form from "components/Form";

class SamePassport extends React.Component {
  state = {
    currentState: "idle"
  };
  formEl = React.createRef();

  onSubmit = () => {
    console.log("------- form el:", this.formEl);
  };

  clearForm = () => {
    console.log("-----clearing form:");
  };

  render() {
    const { currentState } = this.state;
    return (
      <PageContainer title={intl.get("travelersWithSamePassport")}>
        <div id="same-passport" className="container">
          <Form
            forwardRef={this.formEl}
            style={{ margin: "0.75rem" }}
            onSubmit={this.onSubmit}
          >
            <Columns>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="passportNumber"
                  label={<Label>{intl.get("passportNumber")}</Label>}
                />
              </Column>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="nationalityCode"
                  label={<Label>{intl.get("nationalityCode")}</Label>}
                />
              </Column>
              <Column>
                <Select
                  // options={visaIssuanceOptions.map(o => ({
                  //   ...o,
                  //   displayName: intl.get(o.displayName).d(o.displayName)
                  // }))}
                  // disabled={currentState === "loading"}
                  label={<Label>{intl.get("nationality")}</Label>}
                />
              </Column>
            </Columns>
            <div className="buttons" style={{ justifyContent: "flex-end" }}>
              <Button onClick={this.clearForm}>{intl.get("clear")}</Button>
              <Button className="is-primary" type="submit">
                <Icon icon="fa fa-search" />
                &nbsp;
                {intl.get("searchBtn")}
              </Button>
            </div>
          </Form>
          <Table
            className="is-fullwidth"
            thead={[
              "id",
              "firstName",
              "fatherName",
              "grandfatherName",
              "familyName",
              "birthDate",
              "idVersion"
            ].map(h => (
              <th key={h}>{intl.get(h)}</th>
            ))}
          />
          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Button>{intl.get("backBtn")}</Button>
            <Button>{intl.get("addVisitor")}</Button>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default SamePassport;
