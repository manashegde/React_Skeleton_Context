import "core-js/features/string/includes";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";
import "./styles/index.css";
import "font-awesome/css/font-awesome.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  registerServiceWorker();
}
