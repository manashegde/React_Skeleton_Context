import React from "react";
import intl from "react-intl-universal";
import compose from "utils/compose";
import Link from "components/Link";
import Button from "components/Button";
import Icon from "components/Icon";
import withSessionContext from "HOC/withSessionContext";
import withDataMaintenanceContext from "HOC/withDataMaintenanceContext";
import { routePaths } from "containers/Routes";
import { inquiryTypes } from "contexts/dataMaintenance";

class DataMaintenanceMenu extends React.Component {
  render() {
    const {
      locale,
      active,
      setActive,
      sessionContext,
      dataMaintenanceContext
    } = this.props;
    return (
      <div
        className={
          "dropdown" +
          (locale === "ar" ? " is-right" : "") +
          (active === "dataMaintenance" ? " is-active" : "")
        }
      >
        <div
          className="dropdown-trigger"
          onClick={() => setActive("dataMaintenance")}
        >
          <a className="button" data-test="data-maintenance-btn">
            {intl.get("dataMaintenance")}
            &nbsp;
            <Icon icon="fa fa-angle-down" />
          </a>
        </div>
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {/* {sessionContext.hasRoles("RBC.BC01.EXIT") && ( */}
            <span data-test="update-crossing-records-link">
              <Link
                to={routePaths.dataMaintenance.inquiryUpdate}
                onClick={() => {
                  setActive("");
                  // dataMaintenanceContext._setState({
                  //   inquiryType: inquiryTypes.UPDATE
                  // });
                }}
                className="dropdown-item"
              >
                {intl.get("updateCrossingRecords")}
              </Link>
            </span>
            {/* )} */}

            <span data-test="update-visitor-data-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("updateVisitorData")}
              </Link>
            </span>

            <span data-test="update-visitor-suspension-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("updateVisitorSuspension")}
              </Link>
            </span>

            <span data-test="update-entry-exit-indicator-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("updateEntryExitIndicator")}
              </Link>
            </span>

            <span data-test="add-remove-companion-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("addRemoveCompanion")}
              </Link>
            </span>

            <span data-test="cancel-deportation-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("cancelDeportation")}
              </Link>
            </span>

            <span data-test="update-pilgrim-sponsor-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("updatePilgrimSponsor")}
              </Link>
            </span>

            <span data-test="update-pilgrim-dependent-record-hoh-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("updatePilgrimDependentRecordHoh")}
              </Link>
            </span>

            <span data-test="restore-pilgrim-data-prev-years-link">
              <Link
                to={routePaths.crossing.search}
                onClick={() => {
                  setActive("");
                }}
                className="dropdown-item"
              >
                {intl.get("restorePilgrimDataPrevYears")}
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withSessionContext,
  withDataMaintenanceContext
)(DataMaintenanceMenu);
