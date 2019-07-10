import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    campus: state.campuses,
    students: state.campus.students
  };
};

const OneCampus = props => {
  return (
    <div>
      {props.campus.name};{props.campus.imageUrl};
    </div>
  );
};

export default connect(mapStateToProps)(OneCampus);
