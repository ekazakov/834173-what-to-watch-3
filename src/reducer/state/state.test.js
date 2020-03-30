import {reducer, ActionType, ActionCreator} from "./state.js";
import {Genres, SHOWN_FILMS_DEFAULT} from "../../consts.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
    chosenFilm: 0,
    shownFilms: SHOWN_FILMS_DEFAULT,
  });
});

it(`Reducer should return selected genre`, () => {
  expect(reducer({
    genre: Genres.ALL,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.HORROR,
  })).toEqual({
    genre: Genres.HORROR,
  });
});

it(`Reducer should return selected film id`, () => {
  expect(reducer({
    chosenFilm: 0,
  }, {
    type: ActionType.CHOOSE_FILM_INDEX,
    payload: 1,
  })).toEqual({
    chosenFilm: 1,
  });
});

it(`Reducer should return new shown films amount`, () => {
  expect(reducer({
    shownFilms: SHOWN_FILMS_DEFAULT,
  }, {
    type: ActionType.SHOW_MORE_FILMS,
    payload: 16,
  }));
});

it(`Action creators work correctly`, () => {
  expect(ActionCreator.changeGenre()).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ALL,
  });

  expect(ActionCreator.chooseFilmId()).toEqual({
    type: ActionType.CHOOSE_FILM_INDEX,
    payload: 0,
  });

  expect(ActionCreator.showMoreFilms()).toEqual({
    type: ActionType.SHOW_MORE_FILMS,
    payload: SHOWN_FILMS_DEFAULT,
  });
});
