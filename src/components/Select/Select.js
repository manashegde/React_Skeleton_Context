import React from "react";

export default class Select extends React.Component {
  onChange = ({ target }) => {
    this.props.onChange && this.props.onChange(target);
  };
  setRef = ref => {
    this.el = ref;
  };
  render() {
    const {
      label,
      className,
      defaultValue,
      options,
      value,
      onChange,
      ...rest
    } = this.props;
    return (
      <div className="field">
        {typeof label === "function" ? label() : label}
        <div className="control">
          <div className={"select" + (className ? ` ${className}` : "")}>
            <select
              {...rest}
              value={value}
              onChange={this.onChange}
              ref={this.setRef}
              defaultValue={defaultValue}
            >
              {defaultValue && (
                <option value={defaultValue} disabled>
                  {defaultValue}
                </option>
              )}
              {options && typeof options === "function"
                ? options()
                : options &&
                  options.map(option => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.displayName}
                      </option>
                    );
                  })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
