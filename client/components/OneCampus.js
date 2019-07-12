import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    campuses: state.campuses
    //students: state.campus.students
  };
};

const OneCampus = props => {
  console.log(props.campuses);
  let campus = props.campuses[0];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{campus.name}</td>
          </tr>
          <tr>
            <td>{campus.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(OneCampus);
