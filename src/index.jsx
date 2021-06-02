import React from "react";
import ReactDOM from "react-dom";

import "./Styles/globalStyles.scss";

import Routes from "./Routes/routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
