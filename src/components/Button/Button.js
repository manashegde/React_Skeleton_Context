import React from "react";

class Button extends React.Component {
  onClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  };
  render() {
    const { className, children, form, dataTest, ...rest } = this.props;
    return (
      <button
        {...rest}
        form={form}
        className={"button" + (className ? ` ${className}` : "")}
        onClick={this.onClick}
        data-test={dataTest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
