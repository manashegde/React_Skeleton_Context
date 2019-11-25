import React from "react";
import { SessionContextConsumer } from "contexts/session";

export default function withSessionContext(WrappedComponent) {
  class C extends React.Component {
    render() {
      return (
        <SessionContextConsumer>
          {session => (
            <WrappedComponent {...this.props} sessionContext={session} />
          )}
        </SessionContextConsumer>
      );
    }
  }
  C.displayName = `withSessionContext(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return C;
}
