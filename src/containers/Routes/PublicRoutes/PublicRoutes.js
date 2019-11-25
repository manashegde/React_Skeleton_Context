import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import withSessionContext from "HOC/withSessionContext";
import Loading from "components/Loading";
import LocaleDropdown from "components/LocaleDropdown";
import Login from "containers/Login";

const AsyncChangePassword = Loadable({
  loader: () => import("containers/ChangePassword"),
  loading: Loading
});

const PublicRoutes = ({ sessionContext, location }) =>
  sessionContext.jwt1 && sessionContext.jwt2 ? (
    <Redirect
      to={{
        pathname: "/authenticated/home",
        state: { from: location }
      }}
    />
  ) : (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          padding: "20px"
        }}
      >
        <LocaleDropdown />
      </div>
      <Switch>
        <Route exact path={"/changepassword"} component={AsyncChangePassword} />
        <Route component={Login} />
      </Switch>
    </React.Fragment>
  );
export default withSessionContext(PublicRoutes);
