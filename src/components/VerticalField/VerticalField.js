import React from "react";

const VerticalField = ({ label, fieldBody }) => (
  <div className="field">
    {label()}
    {fieldBody()}
  </div>
);

export default VerticalField;
