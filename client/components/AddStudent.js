import React from "react";
import { connect } from "react-redux";
import { postStudent } from "../store";

const mapSateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
let input = { firstName: "", lastName: "", email: "" };
const findSpace = str => {
  let index = 0;
  Array.from(str).forEach((letter, idx) => {
    if (letter === " ") index = idx;
  });
  return index;
};
const mapDispactchToProps = dispatch => {
  let spaceNum = 0;
  return {
    handleChange: event => {
      event.preventDefault();
      spaceNum = findSpace(input.firstName);
      if (spaceNum) {
        input.lastName = input.firstName.slice(
          spaceNum,
          input.firstName.length
        );
        input.firstName = input.firstName.slice(0, spaceNum);
      }
      if (!input.lastName) {
        input.lastName = "UNKNOWN";
      }
      input.firstName =
        input.firstName.charAt(0).toUpperCase() + input.firstName.slice(1);
      input.lastName =
        input.lastName.charAt(0).toUpperCase() + input.lastName.slice(1);
      dispatch(
        postStudent({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email
        })
      );
      //console.log(input.firstName, input.lastName, input.email);
    }
  };
};

const AddStudent = props => {
  return (
    <div>
      Add a Student:
      <form onSubmit={props.handleChange}>
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            input.firstName = event.target.value;
            console.log(event.target.value);
          }}
        />
        <label> Email: </label>
        <input
          onChange={event => {
            event.preventDefault();
            input.email = event.target.value;
            console.log(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      Please enter first and last name seperated by a space.
    </div>
  );
};

export default connect(
  mapSateToProps,
  mapDispactchToProps
)(AddStudent);
