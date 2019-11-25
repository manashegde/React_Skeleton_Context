import React from "react";
import intl from "react-intl-universal";

const NotFound = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {intl.get("404NotFound")}
  </div>
);

export default NotFound;
