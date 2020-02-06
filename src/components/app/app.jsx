import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, year, movies} = props;

  return (
    <Main
      name={name}
      genre={genre}
      year={year}
      movies={movies}
    />
  );
};

export default App;
