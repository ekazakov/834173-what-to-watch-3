import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movies = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
];

ReactDOM.render(
    <App
      movies={movies}
    />,
    document.querySelector(`#root`)
);
