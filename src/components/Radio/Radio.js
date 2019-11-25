import React from "react";

export default class Radio extends React.Component {
  onChange = ({ target }) => {
    this.props.onChange && this.props.onChange(target);
  };
  render() {
    const { onChange, label, checked, ...rest } = this.props;
    return (
      <label className="radio">
        <input
          {...rest}
          type="radio"
          checked={checked}
          onChange={this.onChange}
        />&nbsp;
        {label}
      </label>
    );
  }
}
