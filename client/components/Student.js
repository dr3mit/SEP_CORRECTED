import React from "react";
import { connect } from "react-redux";
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
          {props.students.map((student, idx) => {
            return (
              <tr
                key={idx}
                onClick={() => {
                  console.log(
                    `Student name: ${student.firstName} ${student.lastName}`
                  );
                }}
              >
                <td>
                  Student name: {`${student.firstName} ${student.lastName}`}.
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(Student);
