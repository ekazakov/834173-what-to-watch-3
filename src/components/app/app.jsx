import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, year} = props;

  return (
    <Main
      name={name}
      genre={genre}
      year={year}
    />
  );
};

export default App;
