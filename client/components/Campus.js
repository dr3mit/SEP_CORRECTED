import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
const Campus = props => {
  console.log(props);
  return (
    <div>
      <table>
        {props.campuses.map(campus => {
          return (
            <tr>
              <td>Campus name: {campus.name}.</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default connect(mapStateToProps)(Campus);
