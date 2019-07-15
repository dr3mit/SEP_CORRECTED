import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OneCampus from "./OneCampus";
import { delCampus } from "../store";
import AddCampus from "./AddCampus";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (event, id) => {
      event.preventDefault();
      dispatch(delCampus(id));
    }
  };
};
export const Campus = props => {
  //console.log(props);
  return (
    <div>
      <table>
        <tbody>
          <Router>
            {props.campuses.map(campus => {
              return (
                <tr key={campus.id}>
                  <td>
                    <Link to={`/campus/${campus.id}`}>
                      Campus name: {campus.name}.
                    </Link>

                    <Route
                      path={`/campus/${campus.id}`}
                      component={() => <OneCampus />}
                    />
                  </td>
                  <td>
                    Campus Image: <img src={campus.imageUrl} />
                    <button
                      onClick={() => props.handleDelete(event, campus.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </Router>
        </tbody>
      </table>
      <AddCampus />
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
