import React from "react";
import { connect } from "react-redux";
import { postCampus, setCampusDescription, setCampusName } from "../store";

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    campus: state.campus,
    student: state.student
  };
};

const AddCampus = props => {
  return (
    <div>
      Add a Campus:
      <form
        onSubmit={event => {
          event.preventDefault();
          props.dispatch(
            postCampus({
              name: props.campus.name,
              description: props.campus.description
            })
          );
        }}
      >
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.dispatch(setCampusName(event.target.value));
          }}
        />
        <label> Description: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.dispatch(setCampusDescription(event.target.value));
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(AddCampus);
