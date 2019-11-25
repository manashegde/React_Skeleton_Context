import React from "react";
import intl from "react-intl-universal";
import Modal from "components/Modal";
import withSessionContext from "HOC/withSessionContext";
import Button from "components/Button";

let expireCheckInterval;
let countdownInterval;

class SessionTimeoutModal extends React.Component {
  _setState = this.setState;
  state = {
    currentState: "idle",
    isTokenExpired: false,
    seconds: 30
  };

  componentWillUnmount() {
    this._setState = null;
    if (expireCheckInterval) {
      clearInterval(expireCheckInterval);
      expireCheckInterval = null;
    }
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }

  componentDidMount() {
    this.startExpireCheck();
  }

  startExpireCheck = () => {
    expireCheckInterval = setInterval(() => {
      const now = new Date();
      const exp = new Date(this.props.sessionContext.tokenExp);
      // console.log(`
      //   ---------- is token expired: ${now > exp}
      //   now: ${now}
      //   expires: ${exp}
      // `);
      if (now > exp) {
        this._setState &&
          this._setState(
            {
              isTokenExpired: true
            },
            () => {
              if (expireCheckInterval) {
                clearInterval(expireCheckInterval);
                expireCheckInterval = null;

                countdownInterval = setInterval(() => {
                  if (this.state.seconds === 0) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                    this.props.sessionContext.signout();
                    return;
                  } else {
                    this._setState &&
                      this._setState(state => ({
                        seconds: state.seconds - 1
                      }));
                  }
                }, 1000);
              }
            }
          );
      }
    }, 15000);
  };

  refreshToken = () => {
    const { sessionContext } = this.props;
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    this._setState &&
      this._setState(
        {
          currentState: "isRefreshing"
        },
        async () => {
          try {
            await sessionContext.refreshToken();
            await sessionContext.getXbcState();
            this.setState(
              {
                isTokenExpired: false
              },
              () => this.startExpireCheck()
            );
          } catch (e) {
            console.log("------- failed to refresh token:", e);
            sessionContext.addNotification({
              message: intl
                .get("failedToRefreshToken")
                .d("failedToRefreshToken")
            });
            sessionContext.signout();
          } finally {
            this._setState &&
              this._setState({
                currentState: "idle",
                seconds: 30
              });
          }
        }
      );
  };

  render() {
    const { currentState, seconds } = this.state;
    return (
      <React.Fragment>
        {this.state.isTokenExpired && (
          <Modal
            isCardModal={true}
            modalTitle={intl.get("sessionExpiredTitle")}
            content={`${intl.get(
              "sessionExpiringMessage"
            )} ${seconds} second(s)`}
            footer={
              <div
                className="buttons"
                style={{ justifyContent: "flex-end", width: "100%" }}
              >
                <Button
                  className={`is-primary ${
                    currentState === "isRefreshing" ? "is-loading" : ""
                  }`}
                  onClick={this.refreshToken}
                >
                  {intl.get("stayLoggedIn")}
                </Button>
                <Button onClick={this.props.sessionContext.signout}>
                  {intl.get("signout")}
                </Button>
              </div>
            }
            hideCloseBtn={true}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withSessionContext(SessionTimeoutModal);
