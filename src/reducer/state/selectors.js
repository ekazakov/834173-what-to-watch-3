import {Genres} from "../../consts.js";
import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getGenre = (state) => {
  return state[NameSpace.STATE].genre;
};

export const getGenres = (state) => {
  return [Genres.ALL, ...new Set(getFilms(state).map((film) => film.genre))];
};

export const getFilteredFilms = createSelector(
    (state) => state,
    (state) => {
      return getGenre(state) === Genres.ALL ? getFilms(state) : getFilms(state).filter((film) => film.genre === getGenre(state));
    }
);
