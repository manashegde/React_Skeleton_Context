import React from "react";

export default class Table extends React.Component {
  render() {
    const { thead, tbody, className, ...rest } = this.props;
    return (
      <table {...rest} className={"table" + (className ? ` ${className}` : "")}>
        {thead && (
          <thead>{typeof thead === "function" ? thead() : thead}</thead>
        )}

        {tbody && (
          <tbody>{typeof tbody === "function" ? tbody() : tbody}</tbody>
        )}
      </table>
    );
  }
}
