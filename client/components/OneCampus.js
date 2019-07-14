import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import OneStudent from "./OneStudent";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const OneCampus = props => {
  let Name = "Name: ";
  let Email = "Email: ";
  let studentsStr = "Students: \n";
  const campusId = Number(
    window.location.pathname[window.location.pathname.length - 1]
  );
  let students = props.students.filter(student =>
    student.campusId === campusId ? true : false
  );
  if (students.length < 1) {
    students = [{ firstName: "No Enrolled Students" }];
    Name = "";
    Email = "";
    studentsStr = "";
  }
  const campus = props.campuses.filter(campus =>
    campus.id === campusId ? true : false
  )[0];
  return (
    <Router>
      <div>
        <table>
          <tbody>
            <tr>
              <td>{campus.name}</td>
            </tr>
            <tr />
            <tr>
              <td>{campus.address}</td>
            </tr>
            <tr>
              <td>{campus.description}</td>
            </tr>
            <tr>
              <td>{studentsStr}</td>
            </tr>

            {students.map(student => (
              <tr key={student.id}>
                <td>
                  <Link to={`/student/${student.id}`}>
                    {Name} {student.firstName} {student.lastName}
                  </Link>
                  <Redirect to={`/student/${student.id}`} />
                </td>
                <td>
                  {Email} {student.email}
                </td>
                <td>
                  <img src={student.imageUrl} />
                </td>
                <td>{student.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(OneCampus);
