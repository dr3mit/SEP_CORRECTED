import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { getStudents, getCampuses } from "./store";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Switch } from "react-router-dom";
import Campuses from "./components/Campus";
import Students from "./components/Student";

const appDiv = document.getElementById("app");
class HomePage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => {});
    store.dispatch(getStudents());
    store.dispatch(getCampuses());
  }

  componentWillUnmount() {
    this.unsub();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/campuses">Campuses</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <div>Please choose Campuses or Students.</div>}
            />
            <Route path="/campuses" component={() => <Campuses />} />
            <Route path="/students" component={() => <Students />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<HomePage />, appDiv);
