import * as React from "react";

class Form extends React.Component {
  state = {
    isValid: false
  };

  setRef = ref => {
    this.el = ref;
  };

  submit = e => {
    e.preventDefault();

    if (!this.props.forwardRef) {
      this.props.onSubmit && this.props.onSubmit();
      return;
    }

    if (this.validate()) {
      this.props.onSubmit && this.props.onSubmit();
    }
  };

  // getFieldValues = fieldsArr => {
  //   let result = {};
  //   const { current: formEl } = this.el;
  //   for (let i = 0; i < formEl.length; i++) {
  //     const el = formEl[i];
  //     if (el.nodeName.toLowerCase() === "input" && fieldsArr.includes(el.id)) {
  //       result[el.id] = el.value;
  //     }
  //   }
  //   return result;
  // };

  validate = () => {
    if (!this.props.forwardRef) return true;

    const { forwardRef } = this.props;

    const formLength = forwardRef.current.length;

    let result = false;

    if (forwardRef.current.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = this.el[i];
        const errorLabel = elem.parentNode.querySelector(".help");
        if (errorLabel && elem.nodeName.toLowerCase() === "input") {
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage;
          } else {
            errorLabel.textContent = "";
          }
        }
      }
      result = false;
    } else {
      //clear error messages if form is valid
      for (let i = 0; i < formLength; i++) {
        const elem = forwardRef.current[i];
        const errorLabel = elem.parentNode.querySelector(".help");
        if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
          errorLabel.textContent = "";
        }
      }
      // form is now valid
      result = true;
    }
    return result;
    // const formLength = this.el.length;
    // let result = false;
    // if (this.el.checkValidity() === false) {
    //   for (let i = 0; i < formLength; i++) {
    //     const elem = this.el[i];
    //     const errorLabel = elem.parentNode.querySelector(".help");
    //     if (errorLabel && elem.nodeName.toLowerCase() === "input") {
    //       if (!elem.validity.valid) {
    //         errorLabel.textContent = elem.validationMessage;
    //       } else {
    //         errorLabel.textContent = "";
    //       }
    //     }
    //   }
    //   result = false;
    // } else {
    //   //clear error messages if form is valid
    //   for (let i = 0; i < formLength; i++) {
    //     const elem = this.el[i];
    //     const errorLabel = elem.parentNode.querySelector(".help");
    //     if (errorLabel && elem.nodeName.toLowerCase() !== "button") {
    //       errorLabel.textContent = "";
    //     }
    //   }
    //   // form is now valid
    //   result = true;
    // }
    // return result;
  };

  render() {
    const { children, dataTest, forwardRef, ...rest } = this.props;

    return (
      <form
        {...rest}
        onSubmit={this.submit}
        noValidate
        ref={forwardRef}
        data-test={dataTest}
      >
        {children}
      </form>
    );
  }
}
export default Form;
