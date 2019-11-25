import React from "react";
import { CrossingContextConsumer } from "contexts/crossing";

export default function withCrossingContext(WrappedComponent) {
  class C extends React.Component {
    render() {
      return (
        <CrossingContextConsumer>
          {crossingContext => (
            <WrappedComponent
              {...this.props}
              crossingContext={crossingContext}
            />
          )}
        </CrossingContextConsumer>
      );
    }
  }
  C.displayName = `withCrossingContext(${WrappedComponent.displayName ||
    WrappedComponent.name})`;
  return C;
}
