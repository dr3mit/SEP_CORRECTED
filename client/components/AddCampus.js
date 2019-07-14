import React from "react";
import { connect } from "react-redux";
import { postCampus } from "../store";

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = () => {};

let input = { name: "", desription: "" };

const AddCampus = props => {
  return (
    <div>
      Add a Campus:
      <form
        onSubmit={event => {
          event.preventDefault();
          props.dispatch(
            postCampus({ name: input.name, description: input.desription })
          );
          //console.log(input);
        }}
      >
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            input.name = event.target.value;
            //console.log(event.target.value);
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

export default connect(mapStateToProps)(AddCampus);
