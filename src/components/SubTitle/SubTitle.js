import React from "react";

function SubTitle({
  children,
  type,
  className,
  dataTest,
  is = "5",
  as: Hn = "h5",
  ...props
}) {
  return (
    <Hn
      {...props}
      data-test={dataTest}
      className={`subtitle is-${is}` + (className ? ` ${className}` : "")}
    >
      {children}
    </Hn>
  );
}

export default SubTitle;
