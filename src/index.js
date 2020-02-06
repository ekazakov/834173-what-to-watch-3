import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movie = {
  name: `Hotel Roal`,
  genre: `comedy`,
  year: 2015
};

const movies = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
];

ReactDOM.render(
    <App
      name={movie.name}
      genre={movie.genre}
      year={movie.year}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
