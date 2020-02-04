import React from "react";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const name = props.name;
  // eslint-disable-next-line react/prop-types
  const genre = props.genre;
  // eslint-disable-next-line react/prop-types
  const year = props.year;

  return (
    <MainPage
      name={name}
      genre={genre}
      year={year}
    />
  );
};

export default App;
