import React from "react";
import Icon from "components/Icon";

const fa = {
  expand: "fa fa-angle-right",
  collapse: "fa fa-angle-down"
};

const css = {
  hidden: "is-hidden"
};

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const inProps = "isCollapsed" in props;
    this.state = {
      isCollapsed: inProps ? props.isCollapsed : true,
      icon: inProps ? fa.collapse : fa.expand
    };
  }

  onClick = ({ target }) => {
    const newIcon = this.state.icon === fa.expand ? fa.collapse : fa.expand;
    const newStatus = !this.state.isCollapsed;
    this.setState({
      isCollapsed: newStatus,
      icon: newIcon
    });
  };

  componentWillReceiveProps(nextProps) {
    const { isCollapsed } = nextProps;
    if (
      this.props.isCollapsed !== isCollapsed &&
      this.state.isCollapsed !== isCollapsed
    ) {
      this.setState({ isCollapsed });
    }
  }

  render() {
    const { label = null, children, ...rest } = this.props;
    return (
      <div>
        <label className="checkbox" onClick={this.onClick}>
          <Icon icon={this.state.icon} />
          {label === "function" ? label() : label}
        </label>
        <div className={this.state.isCollapsed ? css.hidden : ""}>
          {children}
        </div>
      </div>
    );
  }
}
