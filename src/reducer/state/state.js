import {extend} from "../../utils.js";
import {Genres, SHOWN_FILMS_DEFAULT} from "../../consts.js";

const initialState = {
  genre: Genres.ALL,
  chosenFilm: 0,
  shownFilms: SHOWN_FILMS_DEFAULT,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RESET_FILMS_AMOUNT: `RESET_FILMS_AMOUNT`,
  CHOOSE_FILM_INDEX: `CHOOSE_FILM_INDEX`,
};

const ActionCreator = {
  changeGenre: (genre = Genres.ALL) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  chooseFilmId: (id = 0) => ({
    type: ActionType.CHOOSE_FILM_INDEX,
    payload: id,
  }),
  showMoreFilms: (filmsCount = SHOWN_FILMS_DEFAULT) => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: filmsCount,
  }),
  resetFilmsAmount: (filmsCount = SHOWN_FILMS_DEFAULT) => ({
    type: ActionType.RESET_FILMS_AMOUNT,
    payload: filmsCount,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.CHOOSE_FILM_INDEX:
      return extend(state, {
        chosenFilm: action.payload,
      });
    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        shownFilms: action.payload + SHOWN_FILMS_DEFAULT,
      });
    case ActionType.RESET_FILMS_AMOUNT:
      return extend(state, {
        shownFilms: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
