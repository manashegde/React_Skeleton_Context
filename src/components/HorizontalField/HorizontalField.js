import React from "react";

const HorizontalField = ({ label, fieldBody }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">{label()}</div>
    <div className="field-body">{fieldBody()}</div>
  </div>
);

export default HorizontalField;
