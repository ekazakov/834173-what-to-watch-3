import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleOfMovieHandler = () => {};

const App = (props) => {
  const {movies} = props;

  return (
    <Main
      movies={movies}
      onTitleOfMovieClick={titleOfMovieHandler}
    />
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
