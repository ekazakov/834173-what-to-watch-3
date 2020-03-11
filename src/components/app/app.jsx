import React from "react";
import Main from "../main/main.jsx";

const titleOfMovieHandler = () => {};

const App = () => {
  return (
    <Main
      onTitleOfMovieClick={titleOfMovieHandler}
    />
  );
};

export default App;
