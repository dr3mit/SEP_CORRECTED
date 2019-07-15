import React from "react";
import { connect } from "react-redux";
import {} from "./";

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: event => {
      event.preventDefault();
      dispatch(
        updCampus(
          Number(window.location.pathname[window.location.pathname.length - 1])
        )
      );
    }
  };
};

let input = { name: "", address: "" };

const UpdateStudent = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Name:</label>
        <input
          onChange={event => {
            event.preventDefault();
            input.name = event.target.value;
          }}
        />
        <label>Address:</label>
        <input
          onChange={event => {
            event.preventDefault();
            input.address = event.target.value;
          }}
        />
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStudent);
