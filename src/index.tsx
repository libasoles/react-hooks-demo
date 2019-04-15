import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

import "react-table/react-table.css";
import AppProviders from "./app/AppProviders";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);