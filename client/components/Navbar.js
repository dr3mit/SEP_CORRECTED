import React from "react";
import store, { getStudents, getCampuses } from "../store";
// import Campuses from "./Campus";
// import Students from "./Student";
let campusesFlag = false;
let studentsFlag = false;
export default props => {
  return (
    <nav>
      <span> Navbar: </span>
      <span
        onClick={event => {
          event.preventDefault();
          store.dispatch(getCampuses());
        }}
      >
        All Campuses
      </span>
      <span>{"\n\t"}</span>
      <span
        onClick={event => {
          event.preventDefault();
          store.dispatch(getStudents());
        }}
      >
        All Students
      </span>
    </nav>
  );
};
