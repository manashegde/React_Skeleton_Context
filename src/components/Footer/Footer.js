import React from "react";
import Select from "components/Select";
import withSessionContext from "HOC/withSessionContext";
import Icon from "components/Icon";
import "./Footer.css";

const textColorMap = {
  "is-success": "has-text-success",
  "is-danger": "has-text-danger",
  "is-warning": "has-text-warning",
  "is-info": "has-text-info"
};

class Footer extends React.Component {
  render() {
    const { notifications } = this.props.sessionContext;
    return (
      <div id="footer">
      Footer
        <div className="notifications-container">
          {notifications.length > 0 && (
            <div className="dropdown is-up is-hoverable">
              <div className="dropdown-trigger">
                <button className="button is-small">
                  <span
                    style={{ overflow: "hidden" }}
                    className={textColorMap[notifications[0].type]}
                  >
                    {notifications[0].message}
                  </span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-up" aria-hidden="true" />
                  </span>
                </button>
              </div>

              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {notifications.map((n, idx) => {
                    return (
                      <React.Fragment key={n.id}>
                        <div className="dropdown-item">
                          <span className={textColorMap[n.type]}>
                            {n.message}
                          </span>
                        </div>
                        {idx !== notifications.length - 1 && (
                          <hr className="dropdown-divider" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withSessionContext(Footer);
