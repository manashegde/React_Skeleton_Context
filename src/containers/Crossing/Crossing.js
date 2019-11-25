import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import NotFound from "components/NotFound";
import Loading from "components/Loading";
import ErrorBoundary from "components/ErrorBoundary";
import { routePaths } from "containers/Routes";
import "./Crossing.css";

const AsyncSearch = Loadable({
  loader: () => import("containers/Crossing/Search"),
  loading: Loading
});

const AsyncSpecialSearch = Loadable({
  loader: () => import("containers/Crossing/Search/SpecialSearch"),
  loading: Loading
});

const AsyncSamePassport = Loadable({
  loader: () => import("containers/Crossing/Search/SamePassport"),
  loading: Loading
});

const AsyncSearchResult = Loadable({
  loader: () => import("containers/Crossing/SearchResult"),
  loading: Loading
});

const AsyncTripInfo = Loadable({
  loader: () => import("containers/Crossing/TripInfo"),
  loading: Loading
});

const AsyncHitReport = Loadable({
  loader: () => import("containers/Crossing/HitReport"),
  loading: Loading
});

const AsyncMiscreantDetail = Loadable({
  loader: () => import("containers/Crossing/HitReport/MiscreantDetail"),
  loading: Loading
});

const AsyncWantedDetail = Loadable({
  loader: () => import("containers/Crossing/HitReport/WantedDetail"),
  loading: Loading
});

const AsyncAfisDetail = Loadable({
  loader: () => import("containers/Crossing/HitReport/AfisDetail"),
  loading: Loading
});

const AsyncAfisDetailEnrollment = Loadable({
  loader: () =>
    import("containers/Crossing/HitReport/AfisDetail/AfisDetailEnrollment"),
  loading: Loading
});

const AsyncFingerVerification = Loadable({
  loader: () => import("containers/Crossing/FingerVerification"),
  loading: Loading
});

class Crossing extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div id="crossing">
          <Switch>
            <Route
              exact
              path={routePaths.crossing.search}
              component={AsyncSearch}
            />
            <Route
              exact
              path={routePaths.crossing.specialSearch}
              component={AsyncSpecialSearch}
            />
            <Route
              exact
              path={routePaths.crossing.samePassport}
              component={AsyncSamePassport}
            />
            <Route
              exact
              path={routePaths.crossing.tripInfo}
              component={AsyncTripInfo}
            />
            <Route
              exact
              path={routePaths.crossing.searchResult}
              component={AsyncSearchResult}
            />
            <Route
              exact
              path={routePaths.crossing.fingerVerification}
              component={AsyncFingerVerification}
            />
            <Route
              exact
              path={routePaths.crossing.hitReport}
              component={AsyncHitReport}
            />
            <Route
              exact
              path={routePaths.crossing.miscreantDetail}
              component={AsyncMiscreantDetail}
            />
            <Route
              exact
              path={routePaths.crossing.wantedDetail}
              component={AsyncWantedDetail}
            />
            <Route
              exact
              path={routePaths.crossing.afisDetail}
              component={AsyncAfisDetail}
            />
            <Route
              exact
              path={routePaths.crossing.afisDetailEnrollment}
              component={AsyncAfisDetailEnrollment}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Crossing;
