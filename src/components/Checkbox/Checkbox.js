import React from "react";

export default class Checkbox extends React.Component {
  state = {
    checked: false
  };

  onChange = ({ target }) => {
    this.setState(
      state => ({
        checked: target.checked
      }),
      () => {
        this.props.onChange && this.props.onChange(target);
      }
    );
  };

  componentDidMount() {
    if (this.props.checked && this.props.checked !== this.state.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { checked } = nextProps;
    if (this.props.checked !== checked && this.state.checked !== checked) {
      this.setState({ checked });
    }
  }

  setRef = ref => {
    this.el = ref;
  };

  render() {
    return (
      <label className="checkbox">
        <input
          {...this.props}
          type="checkbox"
          checked={this.state.checked}
          ref={this.setRef}
          onChange={this.onChange}
        />{" "}
        {typeof this.props.label === "function"
          ? this.props.label()
          : this.props.label}
      </label>
    );
  }
}
