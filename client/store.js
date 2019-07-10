import { applyMiddleware, createStore, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

//action constants
const ADD_STUDENT = "ADD_STUDENT";
const ADD_CAMPUS = "ADD_CAMPUS";
const ENROLL_STUDENT = "ENROLL_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const DELETE_CAMPUS = "DELETE_CAMPUS";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const SHOW_CAMPUS = "SHOW_CAMPUS";
const SHOW_STUDENT = "SHOW_STUDENT";
const SHOW_CAMPUSES = "SHOW_CAMPUSES";
const SHOW_STUDENTS = "SHOW_STUDENTS";
const SHOW_ENROLLED_STUDENTS = "SHOW_ENROLLED_STUDENTS";
//action creators
export const addStudent = student => {
  return {
    type: ADD_STUDENT,
    student
  };
};
export const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};
export const enrollStudent = student => {
  return {
    type: ENROLL_STUDENT,
    student
  };
};
export const removeStudent = student => {
  return {
    type: REMOVE_STUDENT,
    student
  };
};
export const deleteCampus = campus => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};
export const updateStudent = student => {
  return {
    type: UPDATE_STUDENT,
    student
  };
};
export const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
    campus
  };
};
export const showCampus = campus => {
  return {
    type: SHOW_CAMPUS,
    campus
  };
};
export const showStudent = student => {
  return {
    type: SHOW_STUDENT,
    student
  };
};
export const showCampuses = campuses => {
  return {
    type: SHOW_CAMPUSES,
    campuses
  };
};
export const showStudents = students => {
  return {
    type: SHOW_STUDENTS,
    students
  };
};
export const showEnrolledStudents = enrolledStudents => {
  return {
    type: SHOW_ENROLLED_STUDENTS,
    enrolledStudents
  };
};
//thunks

export const getStudents = () => dispatch =>
  axios
    .get("/api/students")
    .then(res => res.data)
    .then(students => dispatch(showStudents(students)))
    .catch(e => console.error(e));

export const getCampuses = () => dispatch => {
  axios
    .get("/api/campuses")
    .then(res => res.data)
    .then(campuses => dispatch(showCampuses(campuses)))
    .catch(e => console.error(e));
};
export const getStudent = () => dispatch => {};
export const getCampus = () => dispatch => {};
export const getEnrolledStudents = dispatch => () => {};

//subReducers

const campusesReducer = (campuses = [], action) => {
  switch (action.type) {
    case ADD_CAMPUS:
      return [...campuses, action.campus];
    case DELETE_CAMPUS:
      return {};
    case UPDATE_CAMPUS:
      return {};
    case SHOW_CAMPUS:
      return action.campus;
    case SHOW_CAMPUSES:
      return action.campuses;
    case SHOW_ENROLLED_STUDENTS:
      return action.campus.students;
    default:
      return campuses;
  }
};
const studentsReducer = (students = [], action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...students, action.student];
    case ENROLL_STUDENT:
      return {};
    case REMOVE_STUDENT:
      return {};
    case DELETE_STUDENT:
      return {};
    case UPDATE_STUDENT:
      return {};
    case SHOW_STUDENT:
      return action.student;
    case SHOW_STUDENTS:
      return action.students;
    default:
      return students;
  }
};

//combineReducers
const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer
});

const Store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default Store;
