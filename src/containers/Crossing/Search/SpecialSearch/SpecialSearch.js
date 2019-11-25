import React from "react";
import intl from "react-intl-universal";

import compose from "utils/compose";
import withCrossingContext from "HOC/withCrossingContext";
import {
  travelerTypes,
  crossingTypes,
  crossingActions
} from "contexts/crossing";
import withApiService, { makeCrossingUrlFor } from "HOC/withApiService";
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

class SpecialSearch extends React.Component {
  formEl = React.createRef();
  state = {
    currentState: "idle"
  };

  onSubmit = () => {
    console.log("------- form el:", this.formEl);
  };

  clearForm = () => {
    console.log("-----clearing form:");
  };

  searchCrossing = async () => {
    const { crossingContext } = this.props;
    try {
      const url = makeCrossingUrlFor(
        crossingActions.SEARCH,
        travelerTypes.VISITOR,
        crossingTypes.ARRIVAL
      );

      await crossingContext.searchCrossing({ data: {}, url });
      await crossingContext.searchMovements();
    } catch (e) {
      console.error("---- special search error:", e);
    }
  };

  render() {
    const { currentState } = this.state;
    return (
      <PageContainer title={intl.get("gccOrCrewSearch")}>
        <div id="special-search" className="container">
          <Form
            forwardRef={this.formEl}
            style={{ margin: "0.75rem" }}
            onSubmit={this.onSubmit}
          >
            <Columns>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="firstName"
                  label={<Label>{intl.get("firstName")}</Label>}
                />
              </Column>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="fatherName"
                  label={<Label>{intl.get("fatherName")}</Label>}
                />
              </Column>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="grandfatherName"
                  label={<Label>{intl.get("grandfatherName")}</Label>}
                />
              </Column>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="familyName"
                  label={<Label>{intl.get("familyName")}</Label>}
                />
              </Column>
            </Columns>
            <Columns>
              <Column>
                <DatePicker
                  id="birthDate"
                  // isOutsideRange={
                  //   hasRoles("RBC.BC01.CHANGE.XDATE")
                  //     ? day =>
                  //         day.isAfter(moment()) ||
                  //         day.isBefore(moment().subtract(30, "days"))
                  //     : function() {}
                  // }
                  label={<Label>{intl.get("birthDate")}</Label>}
                />
              </Column>
              <Column>
                <TextField
                  disabled={currentState === "loading"}
                  name="birthPlace"
                  label={<Label>{intl.get("birthPlace")}</Label>}
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
            thead={
              <tr>
                {[
                  "id",
                  "firstName",
                  "fatherName",
                  "grandfatherName",
                  "familyName",
                  "birthDate"
                ].map(h => (
                  <th key={h}>{intl.get(h)}</th>
                ))}
              </tr>
            }
          />
          <div className="buttons">
            <Button onClick={this.searchCrossing}>
              {intl.get("searchBtn")}
            </Button>
            <Button>{intl.get("addGcc")}</Button>
            <Button>{intl.get("backBtn")}</Button>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default compose(
  withApiService,
  withCrossingContext
)(SpecialSearch);
