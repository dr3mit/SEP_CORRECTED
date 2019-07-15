import React from "react";
import { connect } from "react-redux";
import { updStudent } from "../store";
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
        updStudent(
          Number(window.location.pathname[window.location.pathname.length - 1])
        )
      );
    }
  };
};

let input = { firstName: "", lastName: "", email: "" };

const UpdateStudent = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <span>Name:</span>
        <label>First:</label>
        <input
          onChange={event => {
            event.preventDefault();
            input.firstName = event.target.value;
          }}
        />
        <label>Last:</label>
        <input
          onChange={event => {
            event.preventDefault();
            input.lastName = event.target.value;
          }}
        />
        <span>Contact:</span>
        <label>Email:</label>
        <input
          onChange={event => {
            event.preventDefault();
            input.emailName = event.target.value;
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStudent);
