import * as React from "react";

export default class Box extends React.Component {
  render() {
    const { className, ...rest } = this.props;
    return (
      <div {...rest} className={"box" + (className ? ` ${className}` : "")}>
        {this.props.children}
      </div>
    );
  }
}
