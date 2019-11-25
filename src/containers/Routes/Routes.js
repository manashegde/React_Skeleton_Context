import React from "react";
import Loadable from "react-loadable";
import { Route, Switch, withRouter } from "react-router-dom";
import withSessionContext from "HOC/withSessionContext";
import NotificationRoot from "components/NotificationRoot";
import SpinnerRoot from "components/SpinnerRoot";
import NotFound from "components/NotFound";
import Loading from "components/Loading";

const AsyncPrivateRoutes = Loadable({
  loader: () => import("containers/Routes/PrivateRoutes"),
  loading: Loading
});

const AsyncPublicRoutes = Loadable({
  loader: () => import("containers/Routes/PublicRoutes"),
  loading: Loading
});

const crossingBase = "/authenticated/crossing";
const dataMaintenanceBase = "/authenticated/dataMaintenance";

export const routePaths = {
  home: "/authenticated/home",
  crossing: {
    search: `${crossingBase}/search`,
    specialSearch: `${crossingBase}/specialSearch`,
    samePassport: `${crossingBase}/samePassport`,
    tripInfo: `${crossingBase}/tripInfo`,
    searchResult: `${crossingBase}/searchResult`,
    fingerVerification: `${crossingBase}/fingerVerification`,
    hitReport: `${crossingBase}/hitreport`,
    miscreantDetail: `${crossingBase}/miscreantDetail`,
    wantedDetail: `${crossingBase}/wantedDetail`,
    afisDetail: `${crossingBase}/afisDetail`,
    afisDetailEnrollment: `${crossingBase}/afisDetailEnrollment`
  },
  dataMaintenance: {
    inquiryUpdate: `${dataMaintenanceBase}/inquiryUpdate`
  }
};

export const pageCodes = {
  [routePaths.home]: "BC00-W",
  [routePaths.crossing.search]: "BC01-A",
  [routePaths.crossing.samePassport]: "BC01-D01",
  [routePaths.crossing.specialSearch]: "BC01-D02",
  [routePaths.crossing.tripInfo]: "BC01-D03",
  [routePaths.crossing.searchResult]: "BC02-A",
  [routePaths.crossing.fingerVerification]: "GW17",
  [routePaths.crossing.hitReport]: "BC105-W",
  [routePaths.crossing.miscreantDetail]: "BC75-W",
  [routePaths.crossing.wantedDetail]: "BC76-W",
  [routePaths.crossing.afisDetail]: "GW43",
  [routePaths.crossing.afisDetailEnrollment]: "GW22"
};

function changePageCode(path, setState) {
  const pageCode = pageCodes[path] || "";
  setState({ pageCode });
}

class Routes extends React.Component {
  componentDidMount() {
    const {
      sessionContext: { _setState }
    } = this.props;
    changePageCode(this.props.location.pathname, _setState); // set page code on first load
    this.props.history.listen((location, action) => {
      changePageCode(location.pathname, _setState);
    });
  }
  render() {
    return (
      <div
        style={{ height: "100%" }}
        dir={this.props.sessionContext.locale === "en" ? "ltr" : "rtl"}
      >
        <NotificationRoot />
        <SpinnerRoot />
        <Switch>
          <Route path="/authenticated" component={AsyncPrivateRoutes} />
          <Route path="/" component={AsyncPublicRoutes} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(withSessionContext(Routes));
