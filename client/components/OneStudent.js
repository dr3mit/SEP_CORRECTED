import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const OneStudent = props => {
  let student = props.students.filter(student =>
    student.id === props.id ? true : false
  )[0];
  console.log("student: ", props);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{student.firstName}</td>
          </tr>
          <tr>
            <td>{student.gpa}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(OneStudent);
