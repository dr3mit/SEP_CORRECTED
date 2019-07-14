import React from "react";
import { connect } from "react-redux";
import { postStudent } from "../store";

const mapSateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispactchToProps = () => {
  return {};
};

let input = { firstName: "", email: "" };

const AddStudent = props => {
  return (
    <div>
      Add a Student:
      <form
        onSubmit={event => {
          event.preventDefault();
          props.dispatch(
            postStudent({
              firstName: input.firstName,
              lastName: input.firstName,
              email: input.description
            })
          );
          //console.log(input.name, input.name, input.description);
        }}
      >
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            input.firstName = event.target.value;
            // console.log(event.target.value);
          }}
        />
        <label> Description: </label>
        <input
          onChange={event => {
            event.preventDefault();
            input.description = event.target.value;
            //console.log(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect(mapSateToProps)(AddStudent);
