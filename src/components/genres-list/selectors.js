import {Genres} from "../../consts.js";

export const getGenre = (state) => {
  return state.genre;
};

export const getGenres = (state) => {
  return [Genres.ALL, ...new Set(state.films.map((film) => film.genre))];
};

export const getFilteredFilms = (state) => {
  return getGenre(state) === Genres.ALL ? state.films : state.films.filter((film) => film.genre === getGenre(state));
};
