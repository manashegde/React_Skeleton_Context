import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      message: null
    };
  }

  componentDidCatch(err, info) {
    this.setState({
      hasError: true,
      message: err.message ? err.message : ""
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ flexGrow: "1" }}>
          <p className="notification is-warning">
            {this.state.message || "An unexpected error has occured."}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
