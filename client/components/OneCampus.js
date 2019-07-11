import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    campus: state.campus
    //students: state.campus.students
  };
};

const OneCampus = props => {
  return (
    <div>
      testing
      {props.campus.name}
      {props.campus.imageUrl}
    </div>
  );
};

export default connect(mapStateToProps)(OneCampus);
