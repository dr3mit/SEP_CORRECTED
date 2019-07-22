import React from "react";
import { connect } from "react-redux";
import UpdateStudent from "./UpdateStudent";
const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const OneStudent = props => {
  let student = props.students.filter(student =>
    student.id === props.id ? true : false
  )[0];
  let campus = props.campuses.filter(campus =>
    campus.id === student.campusId ? true : false
  )[0];

  if (!campus) campus = { name: "Not Enrolled at a campus." };

  return (
    <div>
      Student:
      <table>
        <tbody>
          <tr>
            <td>Name: {`${student.firstName} ${student.lastName}`}</td>
          </tr>
          <tr>
            <td>Email: {student.email}</td>
          </tr>
          <tr>
            <td>
              <img src={student.imageUrl} />
            </td>
          </tr>
          <tr>
            <td>GPA: {student.gpa}</td>
          </tr>
          <tr>
            <td>Campus: {campus.name}</td>
          </tr>
        </tbody>
      </table>
      <UpdateStudent />
    </div>
  );
};

export default connect(mapStateToProps)(OneStudent);
