import React from "react";

function Title({ className, children, type, is = 1, as: Hn = "h1", ...props }) {
  return (
    <Hn {...props} className={`title is-${is} ${className || ""}`}>
      {children}
    </Hn>
  );
}

export default Title;
