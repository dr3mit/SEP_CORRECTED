import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
const Student = props => {
  return (
    <div>
      <table>
        {props.students.map(student => {
          return (
            <tr>
              <td>Student name: {student.name}.</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(Student);
