import React from "react";
import intl from "react-intl-universal";
import compose from "utils/compose";
import Link from "components/Link";
import Button from "components/Button";
import Icon from "components/Icon";
import withSessionContext from "HOC/withSessionContext";
import withCrossingContext from "HOC/withCrossingContext";
import { routePaths } from "containers/Routes";
import { crossingTypes } from "contexts/crossing";

class CrossingMenu extends React.Component {
  render() {
    const {
      locale,
      active,
      setActive,
      sessionContext,
      crossingContext
    } = this.props;
    return (
      <div
        className={
          "dropdown" +
          (locale === "ar" ? " is-right" : "") +
          (active === "crossing" ? " is-active" : "")
        }
      >
        <div className="dropdown-trigger" onClick={() => setActive("crossing")}>
          <a className="button" data-test="crossing-procedure-btn">
            {intl.get("crossingProcedures")}
            &nbsp;
            <Icon icon="fa fa-angle-down" />
          </a>
        </div>
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {sessionContext.hasRoles("RBC.BC01.ENTRY") && (
              <span data-test="traveler-arrival-link">
                <Link
                  to={routePaths.crossing.search}
                  onClick={() => {
                    setActive("");
                    crossingContext._setState({
                      crossingType: crossingTypes.ARRIVAL
                    });
                  }}
                  className="dropdown-item"
                >
                  {intl.get("travelerArrival")}
                </Link>
              </span>
            )}
            {sessionContext.hasRoles("RBC.BC01.EXIT") && (
              <span data-test="traveler-departure-link">
                <Link
                  to={routePaths.crossing.search}
                  onClick={() => {
                    setActive("");
                    crossingContext._setState({
                      crossingType: crossingTypes.DEPARTURE
                    });
                  }}
                  className="dropdown-item"
                >
                  {intl.get("travelerDeparture")}
                </Link>
              </span>
            )}
            <Link
              to={routePaths.home}
              onClick={() => setActive("")}
              className="dropdown-item"
            >
              {intl.get("deportation")}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withSessionContext,
  withCrossingContext
)(CrossingMenu);
