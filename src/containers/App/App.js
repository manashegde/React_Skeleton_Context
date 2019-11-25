import React, { Component } from "react";
import Routes from "containers/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import SessionProvider from "contexts/session";
import CrossingContextProvider from "contexts/crossing";

// window.addEventListener("beforeunload", function clearStorage() {
//   sessionStorage.clear();
//   window.removeEventListener("beforeunload", clearStorage);
// });

const basename =
  process.env.NODE_ENV === "production" ? "/nic-xbc-client/" : "";

class App extends Component {

  render() {
    return (
      <SessionProvider>
        <CrossingContextProvider>
          <Router basename={basename}>
            <Routes />
          </Router>
        </CrossingContextProvider>
      </SessionProvider>
    );
  }
}

export default App;
