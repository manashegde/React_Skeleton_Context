import * as React from "react";
import withSessionContext from "HOC/withSessionContext";

class Notification extends React.Component {
  state = {
    animate: "zoomIn"
  };

  removeNotification = () => {
    this.setState(
      {
        animate: "zoomOut"
      },
      () => {
        setTimeout(() => {
          this.props.sessionContext.removeNotification(this.props.id);
        }, 200);
      }
    );
  };

  render() {
    const { type, message } = this.props;
    return (
      <div
        className={`animated notification ${type} ${this.state.animate}`}
        onClick={this.removeNotification}
      >
        <button className="delete" />
        {message}
      </div>
    );
  }
}

class NotificationRoot extends React.Component {
  render() {
    return (
      <div id="notification-root">
        {this.props.sessionContext.notifications.length > 0 &&
          this.props.sessionContext.notifications.map(n => {
            return (
              <Notification
                key={n.id}
                id={n.id}
                type={n.type}
                message={n.message}
              />
            );
          })}
      </div>
    );
  }
}

Notification = withSessionContext(Notification);
export default withSessionContext(NotificationRoot);
