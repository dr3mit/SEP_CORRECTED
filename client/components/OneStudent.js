import React from "react";
import { connect } from "react-redux";
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
  //console.log("campus: ", campus);
  if (!campus) campus = { name: "Not Enrolled at a campus." };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{`${student.firstName} ${student.lastName}`}</td>
          </tr>
          <tr>
            <td>{student.email}</td>
          </tr>
          <tr>
            <td>
              <img src={student.imageUrl} />
            </td>
          </tr>
          <tr>
            <td>{student.gpa}</td>
          </tr>
          <tr>
            <td>{campus.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(OneStudent);
