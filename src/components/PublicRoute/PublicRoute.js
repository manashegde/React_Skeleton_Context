import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import withSessionContext from "HOC/withSessionContext";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.session.jwt ? (
        <Redirect
          to={{
            pathname: "/authenticated/home",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...rest} {...props} />
      )
    }
  />
);

export default withSessionContext(PublicRoute);
