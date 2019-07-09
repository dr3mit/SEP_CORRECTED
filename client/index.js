import "../public/style.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/Main";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <Main campuses={campuses} students={students} />
  </Provider>,
  document.getElementById("app")
);
