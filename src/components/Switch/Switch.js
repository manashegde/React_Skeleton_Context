import React from "react";
import "./Switch.css";

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = ({ target }) => {
    this.props.onChange && this.props.onChange(target);
  };

  render() {
    const { label, checked, name } = this.props;
    return (
      <div className="field">
        {label && typeof label === "function" ? label() : label}
        <div className="control">
          <label className="switch">
            <input
              type="checkbox"
              name={name}
              onChange={this.onChange}
              checked={checked}
            />
            <span className="slider round" />
          </label>
        </div>
      </div>
    );
  }
}
