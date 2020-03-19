import {Genres} from "../../consts.js";
import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

export const getTab = (state) => {
  return state[NameSpace.STATE].currentTab;
};

export const getGenre = (state) => {
  return state[NameSpace.STATE].genre;
};

export const getShownFilms = (state) => {
  return state[NameSpace.STATE].shownFilms;
};

export const getChosenFilm = (state) => {
  const films = getFilms(state);
  const id = state[NameSpace.STATE].chosenFilmId;

  return films.findIndex((film) => film.id === id);
};

export const getGenres = createSelector(
    getFilms,
    (films) => {
      return [Genres.ALL, ...new Set(films.map((film) => film.genre))];
    }
);

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    getShownFilms,
    (films, genre, shownFilms) => {
      return genre === Genres.ALL ? films : films.filter((film) => film.genre === genre).slice(0, shownFilms);
    }
);
