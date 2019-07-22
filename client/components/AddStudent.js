import React from "react";
import { connect } from "react-redux";
import { postStudent } from "../store";
let message = "";
const mapSateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    campus: state.campus,
    student: state.student
  };
};
//let input = { firstName: "", lastName: "", email: "" };

// const mapDispactchToProps = dispatch => {
//   let spaceNum = 0;
//   return {
//     handleChange: event => {
//       event.preventDefault();
//       spaceNum = findSpace(input.firstName);
//       if (spaceNum) {
//         input.lastName = input.firstName.slice(
//           spaceNum,
//           input.firstName.length
//         );
//         input.firstName = input.firstName.slice(0, spaceNum);
//       }
//       if (!input.lastName) {
//         input.lastName = "UNKNOWN";
//       }
//       input.firstName =
//         input.firstName.charAt(0).toUpperCase() + input.firstName.slice(1);
//       input.lastName =
//         input.lastName.charAt(0).toUpperCase() + input.lastName.slice(1);

//       dispatch(
//         postStudent({
//           firstName: input.firstName,
//           lastName: input.lastName,
//           email: input.email
//         })
//       );
//       if (!input.email) {
//         //console.log("test");
//         message = "Invalid Email entered.";
//       }
//       //console.log(input.firstName, input.lastName, input.email);
//     }
//   };
// };

const AddStudent = props => {
  let spaceNum = 0;
  const findSpace = str => {
    let index = 0;
    Array.from(str).forEach((letter, idx) => {
      if (letter === " ") index = idx;
    });
    return index;
  };
  return (
    <div>
      Add a Student:
      <form
        onSubmit={event => {
          event.preventDefault();
          spaceNum = findSpace(props.student.firstName);
          if (spaceNum) {
            props.student.lastName = props.student.firstName.slice(
              spaceNum,
              props.student.firstName.length
            );
            props.student.firstName = props.student.firstName.slice(
              0,
              spaceNum
            );
          }
          if (!props.student.lastName) {
            props.student.lastName = "UNKNOWN";
          }
          props.student.firstName =
            props.student.firstName.charAt(0).toUpperCase() +
            props.student.firstName.slice(1);
          props.student.lastName =
            props.student.lastName.charAt(0).toUpperCase() +
            props.student.lastName.slice(1);

          props.dispatch(
            postStudent({
              firstName: props.student.firstName,
              lastName: props.student.lastName,
              email: props.student.email
            })
          );
          if (!props.student.email) {
            //console.log("test");
            message = "Invalid Email entered.";
          }
          //console.log(input.firstName, input.lastName, input.email);
        }}
      >
        <label> Name: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.student.firstName = event.target.value;
            //console.log(event.target.value);
          }}
        />
        <label> Email: </label>
        <input
          onChange={event => {
            event.preventDefault();
            props.student.email = event.target.value;
            // console.log(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      Please enter first and last names seperated by a space.
      {message}
    </div>
  );
};

export default connect(
  mapSateToProps
  // mapDispactchToProps
)(AddStudent);
