import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
  <App />
   </React.Fragment>
);

