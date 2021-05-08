import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
import ComRouter from "./router";
ReactDOM.render(
  <React.StrictMode>
    <ComRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
