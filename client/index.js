import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
import { getStudents, getCampuses } from "./store";
//import Router from "./router";

const appDiv = document.getElementById("app");

class HomePage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    store.dispatch(getStudents());
    store.dispatch(getCampuses());
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(<HomePage />, appDiv);
