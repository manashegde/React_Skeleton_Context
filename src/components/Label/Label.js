import React from "react";

const Label = ({ children, className = "", ...rest }) => (
  <label {...rest} className={"label" + (className ? ` ${className}` : "")}>
    {children}
  </label>
);

export default Label;
