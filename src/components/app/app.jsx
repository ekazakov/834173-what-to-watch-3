import React from "react";
import Main from "../main/main.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";

const titleOfMovieHandler = () => {};

const App = () => {
  return (
    <Main
      onTitleOfMovieClick={titleOfMovieHandler}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
