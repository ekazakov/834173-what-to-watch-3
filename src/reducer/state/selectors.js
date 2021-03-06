import {Genres} from "../../consts";
import NameSpace from "../name-space";
import {createSelector} from "reselect";
import {SAME_FILMS_COUNT} from "../../consts";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getComments = (state) => {
  return state[NameSpace.DATA].comments;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export const getServerStatus = (state) => {
  return state[NameSpace.DATA].serverStatus;
};

export const getGenre = (state) => {
  return state[NameSpace.STATE].genre;
};

export const getShownFilms = (state) => {
  return state[NameSpace.STATE].shownFilms;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};

export const getChosenFilm = (state) => {
  const films = getFilms(state);
  const id = state[NameSpace.STATE].chosenFilm;

  return films.find((film) => film.id === id);
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
    (films, genre) => {
      return genre === Genres.ALL ? films : films.filter((film) => film.genre === genre);
    }
);

export const getHaveMoreFilms = (state) => {
  const films = getFilteredFilms(state);
  const shownFilms = getShownFilms(state);

  return shownFilms < films.length;
};

export const getSimilarFilms = createSelector(
    getFilms,
    getChosenFilm,
    (films, film) => {
      return films.filter(
          (sameFilm) => sameFilm.genre === film.genre && sameFilm.name !== film.name)
      .slice(0, SAME_FILMS_COUNT);
    }
);

export const getLimitedFilms = createSelector(
    getFilteredFilms,
    getShownFilms,
    (films, shownFilms) => {
      return films.slice(0, shownFilms);
    }
);
