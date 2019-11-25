import * as React from "react";

const Icon = ({ className, children, icon, ...rest }) => (
  <span className={"icon" + (className ? ` ${className}` : "")}>
    <i {...rest} className={icon}>
      {children}
    </i>
  </span>
);

export default Icon;
