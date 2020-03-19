import {reducer, ActionType, ActionCreator} from "./state.js";
import {Genres} from "../../consts.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
    chosenFilm: 0,
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

it(`Action creators work correctly`, () => {
  expect(ActionCreator.changeGenre()).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ALL,
  });

  expect(ActionCreator.chooseFilmIndex()).toEqual({
    type: ActionType.CHOOSE_FILM_INDEX,
    payload: 0,
  });
});
