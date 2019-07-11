import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneCampus from "./OneCampus";
const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};
const Campus = props => {
  console.log(props);
  return (
    <div>
      <table>
        <tbody>
          {props.campuses.map((campus, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <Link to={`/campus/${idx + 1}`}>
                    Campus name: {campus.name}.
                  </Link>
                  <Route
                    path={`/campus/${idx}`}
                    component={() => <OneCampus />}
                  />
                </td>
                <td>
                  Campus Image: <img src={campus.imageUrl} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default connect(mapStateToProps)(Campus);
