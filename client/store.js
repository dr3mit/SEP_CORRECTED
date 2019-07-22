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
const SET_CAMPUS_NAME = "SET_CAMPUS_NAME";
const SET_CAMPUS_DESCRIPTION = "SET_CAMPUS_DESCRIPTION";
const SET_STUDENT_EMAIL = "SET_STUDENT_EMAIL";
const SET_STUDENT_NAME = "SET_STUDENT_NAME";

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
export const deleteStudent = student => {
  return {
    type: DELETE_STUDENT,
    student
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

export const setCampusName = name => {
  return {
    type: SET_CAMPUS_NAME,
    name
  };
};

export const setCampusDescription = description => {
  return {
    type: SET_CAMPUS_DESCRIPTION,
    description
  };
};

export const setStudentName = name => {
  return {
    type: SET_STUDENT_NAME,
    name
  };
};

export const setStudentEmail = email => {
  return {
    type: SET_STUDENT_EMAIL,
    email
  };
};
//thunks

export const updCampus = id => dispatch => {
  axios
    .put(`/api/campus/${id}`, { id: id })
    .then(res => res.data)
    .then(campus => dispatch(updateCampus(campus)))
    .catch(e => console.error(e));
};

export const updStudent = id => dispatch => {
  axios
    .put(`/api/student/${id}`, { id: id })
    .then(res => res.data)
    .then(student => dispatch(updateStudent(student)))
    .catch(e => console.error(e));
};

export const delStudent = id => dispatch => {
  return axios
    .delete(`/api/student/${id}`)
    .then(res => {
      return res.data;
    })
    .then(student => dispatch(deleteStudent(student)))
    .catch(e => console.error(e));
};

export const delCampus = id => dispatch => {
  return axios
    .delete(`/api/campus/${id}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(deleteCampus(campus));
    })
    .catch(e => console.error(e));
};

export const postStudent = data => dispatch => {
  return axios
    .post("/api/students", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    })
    .then(res => {
      return res.data;
    })
    .then(student => {
      console.log("student:", student);
      dispatch(addStudent(student));
    })
    .catch(error => console.log(error));
};

export const postCampus = data => dispatch => {
  return axios
    .post("/api/campuses", { name: data.name, description: data.description })
    .then(res => res.data)
    .then(campus => {
      dispatch(addCampus(campus));
    })
    .catch(error => console.log(error));
};

export const getStudents = () => dispatch => {
  return axios
    .get("/api/students")
    .then(res => res.data)
    .then(students => dispatch(showStudents(students)))
    .catch(e => console.error(e));
};
export const getCampuses = () => dispatch => {
  return axios
    .get("/api/campuses")
    .then(res => res.data)
    .then(campuses => dispatch(showCampuses(campuses)))
    .catch(e => console.error(e));
};
export const getStudent = id => dispatch => {
  return axios
    .get(`api/student/${id}`)
    .then(res => res.data)
    .then(student => dispatch(showStudent(student)))
    .catch(e => console.error(e));
};
export const getCampus = id => dispatch => {
  return axios
    .get(`api/campus/${id}`)
    .then(res => res.data)
    .then(campus => dispatch(showCampus(campus)))
    .catch(e => console.error(e));
};

//subReducers

const campusReducer = (campus = {}, action) => {
  switch (action.type) {
    case SET_CAMPUS_NAME:
      return { ...campus, name: action.name };
    case SET_CAMPUS_DESCRIPTION:
      return { ...campus, description: action.description };
    default:
      return campus;
  }
};

const studentReducer = (student = {}, action) => {
  switch (action.type) {
    case SET_STUDENT_NAME:
      return { ...student, name: action.name };
    case SET_STUDENT_EMAIL:
      return { ...student, email: action.email };
    default:
      return student;
  }
};

const campusesReducer = (campuses = [], action) => {
  switch (action.type) {
    case ADD_CAMPUS:
      return [...campuses, action.campus];
    case DELETE_CAMPUS:
      return campuses.filter(campus =>
        campus.id === action.campus.id ? false : true
      );
    case UPDATE_CAMPUS:
      return [...campuses, action.campus];
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
    case DELETE_STUDENT:
      return students.filter(student =>
        student.id === action.student.id ? false : true
      );
    case UPDATE_STUDENT:
      let retStudents = students.filter(student =>
        student.id === action.student.id ? false : true
      );
      let updatedStudent = students.filter(student =>
        student.id === action.student.id ? true : false
      )[0];
      return [...retStudents, updatedStudent];
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
  students: studentsReducer,
  campus: campusReducer,
  student: studentReducer
});

const Store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default Store;
