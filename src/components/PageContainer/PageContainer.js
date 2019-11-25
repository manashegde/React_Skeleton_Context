import React from "react";
import withSessionContext from "HOC/withSessionContext";
import SubTitle from "components/SubTitle";
import "./PageContainer.css";

class PageContainer extends React.Component {
  render() {
    const { pageCode } = this.props.sessionContext;
    return (
      <div id="PageContainer">
        <div className="header-container">
          <div className="pageCode-container">
            <SubTitle>{pageCode}</SubTitle>
          </div>
          <div className="title-container">
            <SubTitle>{this.props.title}</SubTitle>
            <hr />
          </div>
        </div>
        {this.props.children}
        {/* <div style={{ padding: "18px" }}>{this.props.content}</div> */}
      </div>
    );
  }
}

export default withSessionContext(PageContainer);
