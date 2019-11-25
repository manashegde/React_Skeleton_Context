import * as React from "react";
import Loading from "components/Loading";
import withSessionContext from "HOC/withSessionContext";

const SpinnerRoot = props =>
  Number(props.sessionContext.spinner) > 0 && (
    <div
      id="spinner-root"
      style={{
        position: "absolute",
        backgroundColor: "black",
        opacity: "0.6",
        width: "100%",
        height: "100%",
        zIndex: "1"
      }}
    >
      <Loading style={{ color: "white" }} />
    </div>
  );

export default withSessionContext(SpinnerRoot);
