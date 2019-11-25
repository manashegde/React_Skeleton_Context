import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import withSessionContext from "HOC/withSessionContext";
import NotFound from "components/NotFound";
import Loading from "components/Loading";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import SessionTimeoutModal from "components/SessionTimeoutModal";
import { routePaths } from "containers/Routes";
import "./PrivateRoutes.css";

const AsyncHome = Loadable({
  loader: () => import("containers/Home"),
  loading: Loading
});

const AsyncCrossing = Loadable({
  loader: () => import("containers/Crossing"),
  loading: Loading
});

const AsyncDataMaintenance = Loadable({
  loader: () => import("containers/DataMaintenance"),
  loading: Loading
});

function PrivateRoutes({ sessionContext, children, ...props }) {
  const matchUrl = props.match.url;
  return sessionContext.jwt1 && sessionContext.jwt2 ? (
    <div id="private-routes">
      <SessionTimeoutModal />
      <Navbar />
      <Switch>
        <Route path={routePaths.home} component={AsyncHome} />
        <Route path={matchUrl + "/crossing"} component={AsyncCrossing} />
        <Route
          path={matchUrl + "/dataMaintenance"}
          component={AsyncDataMaintenance}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  ) : (
    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  );
}

export default withSessionContext(PrivateRoutes);
