import React from "react";

export default function Column({ className, children, ...props }) {
  return (
    <div {...props} className={"column" + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
}
