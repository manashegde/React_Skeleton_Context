import React from "react";
import intl from "react-intl-universal";
import CrossingMenu from "components/MenuBar/CrossingMenu";
import DataMaintenanceMenu from "components/MenuBar/DataMaintenanceMenu";
import "./MenuBar.css";

export default function MenuBar({ setActive, active, locale }) {
  return (
    <React.Fragment>
      <div className="menuBar">
        <CrossingMenu active={active} locale={locale} setActive={setActive} />

        <DataMaintenanceMenu
          active={active}
          locale={locale}
          setActive={setActive}
        />
        {/* <div className="dropdown">
          <div className="dropdown-trigger">
            <a className="button">
              {intl.get("dataMaintenance").d("dataMaintenance")}
            </a>
          </div>
        </div> */}

        <div className="dropdown">
          <div className="dropdown-trigger">
            <a className="button">{intl.get("inquiries").d("inquiries")}</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown-trigger">
            <a className="button">
              {intl.get("pilgrimTripProcedures").d("pilgrimTripProcedures")}
            </a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown-trigger">
            <a className="button">{intl.get("reports").d("reports")}</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown-trigger">
            <a className="button">{intl.get("settings").d("settings")}</a>
          </div>
        </div>
      </div>
      {active && (
        <div
          className="click-catcher"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor:"white"
          }}
          onClick={() => setActive("")}
        />
      )}
    </React.Fragment>
  );
}
