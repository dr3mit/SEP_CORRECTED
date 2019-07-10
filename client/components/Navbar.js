import React from "react";
import store, { getStudents, getCampuses } from "../store";
import Campuses from "./Campus";
import Students from "./Student";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "../index";
export default props => {
  return (
    <Router>
      <span> Navbar: </span>
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
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/campuses" component={() => <Campuses />} />
      <Route path="/students" component={() => <Students />} />
    </Router>
  );
};
