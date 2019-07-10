import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    student: state.student
  };
};

const OneStudent = props => {
  return (
    <div>
      {props.student.firstName};{props.student.lastName};
    </div>
  );
};

export default connect(mapStateToProps)(OneStudent);
