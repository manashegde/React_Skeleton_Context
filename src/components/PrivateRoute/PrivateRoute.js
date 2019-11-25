import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import withSessionContext from "HOC/withSessionContext";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.session.jwt ? (
        <Component {...rest} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default withSessionContext(PrivateRoute);
