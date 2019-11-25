import React from "react";
import Icon from "components/Icon";

const Loading = ({ style = {} }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Icon style={style} icon="fa fa-spinner fa-3x fa-pulse" />
  </div>
);

export default Loading;
