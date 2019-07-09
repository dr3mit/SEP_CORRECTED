import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
//import Router from "./router";

const appDiv = document.getElementById("app");

class HomePage extends Component {
  render() {
    return (
      <div>
        <span>testing</span>

        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<HomePage />, appDiv);
