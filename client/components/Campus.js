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
        <tbody>
          {props.campuses.map((campus, idx) => {
            return (
              <tr key={idx}>
                <td>Campus name: {campus.name}.</td>
                <td>Campus Image: {campus.imageUrl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default connect(mapStateToProps)(Campus);
