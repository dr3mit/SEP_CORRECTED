import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneStudent from "./OneStudent";
import AddStudent from "./AddStudent";
import { delStudent } from "../store";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: event => {
      event.preventDefault();
      dispatch(delStudent(id));
    }
  };
};
let id = 0;
export const Student = props => {
  return (
    <div>
      <table>
        <tbody>
          <Router>
            {props.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>
                    <Link to={`/student/${student.id}`}>
                      Student name: {`${student.firstName} ${student.lastName}`}
                    </Link>
                    <Route
                      path={"/student/" + String(student.id)}
                      component={() => <OneStudent id={student.id} />}
                    />
                    <button
                      onMouseEnter={() => {
                        id = student.id;
                      }}
                      onClick={props.handleDelete}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </Router>
        </tbody>
      </table>
      <AddStudent />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
