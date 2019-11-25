import React from "react";
import intl from "react-intl-universal";
import withSessionContext from "HOC/withSessionContext";
import Image from "components/Image";
import enFlag from "images/english.png";
import arFlag from "images/arabic.png";

class LocaleDropdown extends React.Component {
  state = {
    isLocaleDropdownActive: ""
  };
  toggleVisibility = () => {
    this.setState(state => ({
      isLocaleDropdownActive:
        state.isLocaleDropdownActive === "" ? "is-active" : ""
    }));
  };
  toggleLocale = () => {
    this.props.sessionContext.changeLocale();
    this.setState({
      isLocaleDropdownActive: ""
    });
  };
  render() {
    const { locale } = this.props.sessionContext;
    const { isLocaleDropdownActive } = this.state;
    const isRight = locale === "en" ? " is-right" : "";
    const isDropdownActive = isLocaleDropdownActive ? " is-active" : "";
    return (
      <div className={"dropdown" + isRight + isDropdownActive}>
        <div className="dropdown-trigger" onClick={this.toggleVisibility}>
          <Image
            src={locale === "en" ? enFlag : arFlag}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="dropdown-menu" role="menu">
          <div
            className="dropdown-content"
            style={{
              background:
                "linear-gradient(180deg, #5A6A74 4.97%, #3F525E 31.49%)"
            }}
          >
            <div
              className="dropdown-item"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
              onClick={this.toggleLocale}
            >
              <Image src={locale === "en" ? arFlag : enFlag} /> &nbsp;&nbsp;
              <span style={{ color: "white", fontWeight: "600" }}>
                {locale === "en" ? "Arabic" : intl.get("english")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSessionContext(LocaleDropdown);
