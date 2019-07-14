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
const findSpace = str =>
  Array.from(str).filter(letter => (letter === " " ? true : false))[0];
const mapDispactchToProps = dispatch => {
  let spaceNum = 0;
  return {
    handleChange: event => {
      event.preventDefault();
      spaceNum = findSpace(input.firstName);
      input.lastName = input.firstName.slice(spaceNum);
      input.firstName = input.firstName.slice(0, spaceNum);
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
    </div>
  );
};

export default connect(
  mapSateToProps,
  mapDispactchToProps
)(AddStudent);
