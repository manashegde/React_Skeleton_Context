import React from "react";

export default class Modal extends React.Component {
  state = {
    animate: "zoomIn"
  };

  static defaultProps = {
    modalTitle: "",
    hideModal: () => {},
    content: "",
    footer: "",
    hideCloseBtn: false
  };

  hideModal = () => {
    this.setState(
      {
        animate: "zoomOut"
      },
      () => {
        setTimeout(() => {
          this.props.hideModal && this.props.hideModal();
        }, 200);
      }
    );
  };

  render() {
    return this.props.isCardModal ? (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {typeof this.props.modalTitle === "function"
                ? this.props.modalTitle()
                : this.props.modalTitle}
            </p>
            {!this.props.hideCloseBtn && (
              <button
                className="delete is-large"
                aria-label="close"
                onClick={this.hideModal}
              />
            )}
          </header>
          <section className="modal-card-body">
            {typeof this.props.content === "function"
              ? this.props.content()
              : this.props.content}
          </section>
          <footer className="modal-card-foot">
            {typeof this.props.footer === "function"
              ? this.props.footer()
              : this.props.footer}
          </footer>
        </div>
      </div>
    ) : (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className={"modal-content animated " + this.state.animate}>
          {typeof this.props.content === "function"
            ? this.props.content()
            : this.props.content}
        </div>
        {!this.props.hideCloseBtn && (
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.hideModal}
          />
        )}
      </div>
    );
  }
}
