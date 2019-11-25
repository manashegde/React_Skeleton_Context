import React from "react";

export default function Columns({ className, children, ...props }) {
  return (
    <div {...props} className={"columns" + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
}
