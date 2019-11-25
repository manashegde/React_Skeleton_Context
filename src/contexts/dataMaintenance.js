import * as React from "react";

const DataMaintContext = React.createContext();

export const DataMaintContextConsumer = DataMaintContext.Consumer;

export const inquiryTypes = {
  UPDATE: "update"
};

let initialState = {};

class DataMaintContextProvider extends React.Component {
  state = {
    ...initialState,

    _setState: (next, cb) => {
      if (typeof next === "function") {
        this.setState(
          state => next(state),
          () => {
            cb && typeof cb === "function" && cb(this.state);
            console.log("-------new data maintenance context:", this.state);
          }
        );
      } else {
        this.setState({ ...next }, () => {
          cb && typeof cb === "function" && cb(this.state);
          console.log("-------new data maintenance context:", this.state);
        });
      }
    },

    resetState: () => {
      this.setState(
        state => ({
          ...initialState
        }),
        () => {
          console.log("--------data maintenance context reset:", this.state);
        }
      );
    }
  };
  render() {
    return (
      <DataMaintContext.Provider value={this.state}>
        {this.props.children}
      </DataMaintContext.Provider>
    );
  }
}

export default DataMaintContextProvider;
