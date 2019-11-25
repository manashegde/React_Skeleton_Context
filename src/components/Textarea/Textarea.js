import React from "react";

export default class Textarea extends React.Component {
  setRef = ref => {
    this.el = ref;
  };
  render() {
    const {
      value,
      label,
      className,
      onChange,
      placeholder,
      ...props
    } = this.props;
    return (
      <div className="field">
        {label && typeof label === "function" ? label() : label}
        <div className="control">
          <textarea
            {...props}
            ref={this.setRef}
            className={"textarea" + (className ? ` ${className}` : "")}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}
