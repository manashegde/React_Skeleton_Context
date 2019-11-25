import React from "react";

class TextField extends React.PureComponent {
  state = { value: "" };

  onChange = ({ target }) => {
    this.setState(
      {
        value: target.value
      },
      () => {
        this.props.onChange && this.props.onChange(target);
      }
    );
  };

  componentDidMount() {
    if (this.props.value && this.props.value !== this.state.value) {
      this.setState({ value: this.props.value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (this.props.value !== value && this.state.value !== value) {
      this.setState({ value });
    }
  }

  // setRef = ref => {
  //   this.el = ref;
  // };

  render() {
    const {
      errorStyle = "is-warning",
      errorSize = "15px",
      className = "",
      label = null,
      type = "text",
      size = "",
      forwardRef = null,
      dataTest,
      errorMsg = null,
      ...rest
    } = this.props;
    return (
      <div className="field">
        {label && typeof label === "function" ? label() : label}
        <div className="control">
          <input
            {...rest}
            className={"input " + className}
            type={type}
            value={this.state.value}
            onChange={this.onChange}
            ref={forwardRef}
            data-test={dataTest}
          />
          <p className={`help ${errorStyle}`} style={{ fontSize: errorSize }}>
            {errorMsg && errorMsg}
          </p>
        </div>
      </div>
    );
  }
}

export default TextField;
