import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneStudent from "./OneStudent";
import AddStudent from "./AddStudent";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
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

export default connect(mapStateToProps)(Student);
