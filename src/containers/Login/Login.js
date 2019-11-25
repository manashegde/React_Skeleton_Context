import React from "react";
import intl from "react-intl-universal";
import { setInputValue } from "utils/helpers";
import { urls } from "HOC/withApiService";
import compose from "utils/compose";
import Form from "components/Form";
import Label from "components/Label";
import TextField from "components/TextField";
import Button from "components/Button";
import Image from "components/Image";
import Box from "components/Box";
import SubTitle from "components/SubTitle";

import withSessionContext from "HOC/withSessionContext";
import { routePaths } from "containers/Routes";
import "./Login.css";

class Login extends React.Component {
  state = {
    currentState: "idle",
    isChangePassword: false
  };
  _setState = this.setState;
  usernameEl = React.createRef();
  passwordEl = React.createRef();
  newPasswordEl = React.createRef();
  confirmNewPasswordEl = React.createRef();

  componentWillUnmount() {
    this._setState = null;
  }

  componentDidMount() {
    //todo: remove
    setInputValue(this.usernameEl.current, "xbc");
    setInputValue(this.passwordEl.current, "rSWnq?vXdpseBGu8r&H2&Y8s*6Q$@5Uk)");
    ///////////////////////////////////////////////////
  }

  getXbcToken = async () => {
    const res = await this.props.sessionContext.getXbcState({
      url: urls.postLogin
    });
  };

  callIdentityGateway = async () => {
    const { sessionContext } = this.props;
    const credentials = {
      Username: this.usernameEl.current.value, //xbc
      Password: this.passwordEl.current.value //"rSWnq?vXdpseBGu8r&H2&Y8s*6Q$@5Uk)"
    };
    console.log("--------- creds:", credentials);
    await sessionContext.callIdentityGateway({
      data: credentials
    });
  };

  authenticate = () => {
    console.log("hiii", this.props)
    // this.props.history.push(routePaths.home)
    this._setState &&
      this._setState(
        state => ({
          currentState: "loading"
        }),
        async () => {
          try {
            console.log("------- authenticating");
            await this.callIdentityGateway();
            this.props.history.push(routePaths.home)
            // await this.getXbcToken();
          } catch (e) {
            console.log("------- failed to login:", e);
            this.props.sessionContext.addNotification({ message: e });
            this._setState &&
              this._setState({
                currentState: "idle"
              });
          }
        }
      );
  };

  toggleChangePasswordFields = () => {
    this.setState(state => ({
      isChangePassword: !state.isChangePassword
    }));
  };

  changePassword = async () => {
    console.log("changing password");
  };

  render() {
    const { isChangePassword, currentState } = this.state;

    return (
      <div id="Login">
        <div className="login-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "5em"
            }}
          >
           
          </div>
          <br />
          <Box className="login-box">
           
           
            <Form style={{ maxWidth: "350px", margin: "0 auto" }}>
              <TextField
                forwardRef={this.usernameEl}
                disabled={currentState === "loading"}
                dataTest="login-username-field"
                label={
                  <Label style={{ color: "white", fontWeight: "400" }}>
                    {intl.get("username")}
                  </Label>
                }
              />
              <TextField
                forwardRef={this.passwordEl}
                type="password"
                disabled={currentState === "loading"}
                dataTest="login-password-field"
                label={
                  <Label style={{ color: "white", fontWeight: "400" }}>
                    {intl.get("password")}
                  </Label>
                }
              />
              {isChangePassword && (
                <React.Fragment>
                  <TextField
                    forwardRef={this.newPasswordEl}
                    type="password"
                    dataTest="login-new-password-field"
                    disabled={currentState === "loading"}
                    label={
                      <Label style={{ color: "white", fontWeight: "400" }}>
                        {intl.get("newPassword")}
                      </Label>
                    }
                  />
                  <TextField
                    forwardRef={this.confirmNewPasswordEl}
                    type="password"
                    disabled={currentState === "loading"}
                    dataTest="login-confirm-new-password-field"
                    label={
                      <Label style={{ color: "white", fontWeight: "400" }}>
                        {intl.get("confirmNewPassword")}
                      </Label>
                    }
                  />
                </React.Fragment>
              )}
              <a
                style={{ color: "white" }}
                onClick={this.toggleChangePasswordFields}
              >
                {intl.get("changePassword")}
              </a>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {isChangePassword ? (
                  <Button
                    className={
                      "is-primary" +
                      (currentState === "loading" ? " is-loading" : "")
                    }
                    onClick={this.changePassword}
                    disabled={currentState === "loading"}
                    dataTest="change-password-btn"
                  >
                    {intl.get("changePassword")}
                  </Button>
                ) : (
                  <Button
                    className={
                      "is-primary" +
                      (currentState === "loading" ? " is-loading" : "")
                    }
                    onClick={this.authenticate}
                    disabled={currentState === "loading"}
                    dataTest="login-btn"
                  >
                    {intl.get("login")}
                  </Button>
                )}
              </div>
            </Form>
          </Box>
        </div>
        <div className="page-code">
          <span>LGOO</span>
        </div>
      </div>
    );
  }
}
export default compose(withSessionContext)(Login);

export { Login };
