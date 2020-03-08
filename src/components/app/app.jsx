import React from "react";
import Main from "../main/main.jsx";
import {filmsProps} from "../../consts.js";

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
  films: filmsProps,
};

export default App;
