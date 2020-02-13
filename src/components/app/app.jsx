import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleOfMovieHandler = () => {};

const App = (props) => {
  const {films} = props;

  return (
    <Main
      films={films}
      onTitleOfMovieClick={titleOfMovieHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
