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

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleSubmit: event => {
//       event.preventDefault();
//       dispatch(
//         postCampus({ name: input.name, description: input.description })
//       );
//       //console.log(input);
//     }
//   };
// };

//let input = { name: "", description: "" };

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
          //console.log(input);
        }}
      >
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.dispatch(setCampusName(event.target.value));
            //input.name = event.target.value;
            //console.log(event.target.value);
          }}
        />
        <label> Description: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.dispatch(setCampusDescription(event.target.value));
            // input.description = event.target.value;
            //console.log(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(AddCampus);
