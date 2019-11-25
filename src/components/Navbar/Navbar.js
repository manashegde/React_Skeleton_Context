import * as React from "react";
import intl from "react-intl-universal";
import { Link } from "react-router-dom";
import { pageCodes, routePaths } from "containers/Routes";
import Image from "components/Image";
import Icon from "components/Icon";

import arFlag from "images/arabic.png";
import enFlag from "images/english.png";
import withSessionContext from "HOC/withSessionContext";
import withCrossingContext from "HOC/withCrossingContext";
import MenuBar from "components/MenuBar";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    active: ""
  };

  setActive = nav => {
    this.setState(state => {
      return {
        active: nav === state.active ? "" : nav
      };
    });
  };

  signout = () => {
    this.setState(
      {
        active: ""
      },
      () => this.props.sessionContext.signout()
    );
  };

  toggleLocale = () => {
    this.setState(
      {
        active: ""
      },
      () => this.props.sessionContext.changeLocale()
    );
  };

  onLogoClicked = () => {
    const { crossingContext, sessionContext } = this.props;
    if (
      sessionContext.pageCode === pageCodes[routePaths.crossing.searchResult]
    ) {
      try {
        crossingContext.cancelCrossing();
      } catch (e) {
        console.error(e);
      }
    }
  };

  render() {
    const { active } = this.state;
    const { locale, xbcState = { user: {} } } = this.props.sessionContext;
    return (
      <React.Fragment>
      <nav className="nav">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Link
              onClick={this.onLogoClicked}
              to="/authenticated/home"
              className="navbar-brand"
            >
              {/* <Image
                src={logoMain}
                alt="brand logo"
                style={{ height: "80px", width: "80px" }}
              /> */}
            </Link>
            <div>
              <div style={{ color: "white" }}>
                <Icon icon="fa fa-map-marker" />
              </div>
              {/* <MenuBar
                active={active}
                setActive={this.setActive}
                locale={locale}
              /> */}
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <a className="button">{intl.get("menu1").d("menu1")}</a>
                </div>
              </div>{" "}
              <div
              className={
                "dropdown" +
                (active === "menu1" ? " is-active" : "")
              }
            >
              <div
                className="dropdown-trigger"
                onClick={() => this.setActive("menu1")}
              >
                <a className="button">
                 
                  <span title={"Menu1"}>{"Menu1"}</span>
                  <Icon icon="fa fa-angle-down" />
                </a>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <span className="dropdown-item">
               
                     
                      <span style={{ color: "white", fontWeight: "600" }}>
                        {intl.get("help")}
                      </span>
                
                  </span>
                  <span className="dropdown-item">
                    <a onClick={this.signout}>
                      <Icon style={{ color: "white" }} icon="fa fa-power-off" />
                      &nbsp;&nbsp;
                      <span style={{ color: "white", fontWeight: "600" }}>
                        {intl.get("signout")}
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="navbar-right">
            <div
              style={{ color: "white", display: "flex" }}
              className="date-time"
            >
              <Icon icon="fa fa-calendar" />
              &nbsp;
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div
              className={
                "dropdown" +
                (locale === "en" ? " is-right" : "") +
                (active === "user" ? " is-active" : "")
              }
            >
              <div
                className="dropdown-trigger"
                onClick={() => this.setActive("user")}
              >
                <a className="button">
                  <Icon className="is-large" icon="fa fa-user-circle fa-2x" />
                  &nbsp;&nbsp;
                  <span title={"username"}>{"Username"}</span>
                  <Icon icon="fa fa-angle-down" />
                </a>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <span className="dropdown-item">
                    <a>
                      <Icon
                        style={{ color: "white" }}
                        icon="fa fa-question-circle"
                      />
                      &nbsp;&nbsp;
                      <span style={{ color: "white", fontWeight: "600" }}>
                        {intl.get("help")}
                      </span>
                    </a>
                  </span>
                  <span className="dropdown-item">
                    <a onClick={this.signout}>
                      <Icon style={{ color: "white" }} icon="fa fa-power-off" />
                      &nbsp;&nbsp;
                      <span style={{ color: "white", fontWeight: "600" }}>
                        {intl.get("signout")}
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* <div
              className={
                "dropdown" +
                (locale === "en" ? " is-right" : "") +
                (active === "locale" ? " is-active" : "")
              }
            >
              <div
                className="dropdown-trigger"
                onClick={() => this.setActive("locale")}
              >
                <a className="button">
                  <Image
                    src={locale === "en" ? enFlag : arFlag}
                    style={{ cursor: "pointer" }}
                  />
                  <Icon icon="fa fa-angle-down" />
                </a>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <span className="dropdown-item">
                    <a
                      onClick={this.toggleLocale}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image src={locale === "en" ? arFlag : enFlag} />{" "}
                      &nbsp;&nbsp;
                      <span style={{ color: "white", fontWeight: "600" }}>
                        {locale === "en" ? "Arabic" : intl.get("english")}
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
        {active && (
          <div
            className="click-catcher"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0"
            }}
            onClick={() => this.setActive("")}
          />
        )}
        </React.Fragment>
    );
  }
}

export default withSessionContext(withCrossingContext(Navbar));
