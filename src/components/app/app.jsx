import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {movies} = props;

  return (
    <Main
      movies={movies}
    />
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default App;
