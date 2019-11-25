import React from "react";
import intl from "react-intl-universal";
import { routePaths } from "containers/Routes";
import Link from "components/Link";
import withCrossingContext from "HOC/withCrossingContext";
import Button from "components/Button";
import Label from "components/Label";
import Table from "components/Table";
import Box from "components/Box";
import PageContainer from "components/PageContainer";
import "./AfisDetail.css";

const mockBiometricsHitReportHeaders = [
  "no",
  "enrollee",
  "type",
  "status",
  "criminalRecord",
  "latentRecord",
  "operatorId",
  "location",
  "lastUpdate"
];
const mockBiometricsHitReport = [
  {
    no: "1",
    enrolee: "enrollee",
    type: "type",
    status: "status",
    criminalRecord: "crimRecord",
    latentRecord: "latentRecord",
    operatorId: Math.random().toString(),
    location: "Saudi Arabia",
    lastUpdate: new Date().toLocaleDateString()
  },
  {
    no: "2",
    enrollee: "enrollee",
    type: "type",
    status: "status",
    criminalRecord: "crimRecord",
    latentRecord: "latentRecord",
    operatorId: Math.random().toString(),
    location: "Saudi Arabia",
    lastUpdate: new Date().toLocaleDateString()
  },
  {
    no: "3",
    enrollee: "enrollee",
    type: "type",
    status: "status",
    criminalRecord: "crimRecord",
    latentRecord: "latentRecord",
    operatorId: Math.random().toString(),
    location: "Saudi Arabia",
    lastUpdate: new Date().toLocaleDateString()
  }
];

const mockCwlHeaders = [
  "no",
  "sourceId",
  "source",
  "personId",
  "personAction",
  " "
];
const mockCwl = [
  {
    no: "1",
    sourceId: Math.random().toString(),
    source: "source1",
    personId: Math.random().toString(),
    personAction: "personAction1"
  },
  {
    no: "2",
    sourceId: Math.random().toString(),
    source: "source2",
    personId: Math.random().toString(),
    personAction: "personAction2"
  },
  {
    no: "3",
    sourceId: Math.random().toString(),
    source: "source3",
    personId: Math.random().toString(),
    personAction: "personAction3"
  }
];

class AfisDetail extends React.Component {
  state = {
    selected: ""
  };

  viewDetail = row => {
    console.log("viewing details for ", row);
    const { history } = this.props;
    history.push(routePaths.crossing.afisDetailEnrollment);
  };

  getWatchListForReport = row => {
    console.log("getting watch list for report: ", row);
    this.setState({
      selected: row
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <PageContainer title={intl.get("afisDetail")}>
        <div
          id="AfisDetail"
          className="container"
          style={{ fontSize: ".75rem" }}
        >
          <Box>
            <Label>{intl.get("biometricsHitReport")}</Label>
            <Table
              className="is-fullwidth is-striped is-hoverable"
              style={{ border: "1px solid #eee" }}
              thead={
                <tr>
                  {mockBiometricsHitReportHeaders.map(t => (
                    <th key={t}>{intl.get(t).d(t)}</th>
                  ))}
                </tr>
              }
              tbody={mockBiometricsHitReport.map((a, b) => (
                <tr
                  key={b}
                  className={
                    "biometricHitReportRow" + (selected === b ? " active" : "")
                  }
                  onClick={() => this.getWatchListForReport(b)}
                >
                  {mockBiometricsHitReportHeaders.map((h, x) => (
                    <td key={x}>{a[h]}</td>
                  ))}
                </tr>
              ))}
            />
            <Label>{intl.get("consolidatedWatchList")}</Label>
            <Table
              className="is-fullwidth is-striped is-hoverable"
              style={{ border: "1px solid #eee" }}
              thead={
                <tr>
                  {mockCwlHeaders.map(t => (
                    <th key={t}>{intl.get(t).d(t)}</th>
                  ))}
                </tr>
              }
              tbody={mockCwl.map((a, b) => (
                <tr key={b}>
                  {mockCwlHeaders.map(
                    (h, x) =>
                      h === " " ? (
                        <td key={x}>
                          <Button
                            className="is-primary is-outlined is-small"
                            onClick={() => this.viewDetail(b)}
                          >
                            Detail
                          </Button>
                        </td>
                      ) : (
                        <td key={x}>{a[h]}</td>
                      )
                  )}
                </tr>
              ))}
            />
          </Box>

          <div className="buttons" style={{ justifyContent: "flex-end" }}>
            <Link
              className="button has-shadow"
              to={routePaths.crossing.hitReport}
            >
              {intl.get("done")}
            </Link>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default withCrossingContext(AfisDetail);
