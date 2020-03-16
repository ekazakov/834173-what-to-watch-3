import {reducer, ActionType, ActionCreator} from "./state.js";
import {Genres} from "../../consts.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
    chosenFilmId: 0,
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
    chosenFilmId: 0,
  }, {
    type: ActionType.CHOOSE_FILM_ID,
    payload: 1,
  })).toEqual({
    chosenFilmId: 1,
  });
});

it(`Action creators work correctly`, () => {
  expect(ActionCreator.changeGenre()).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ALL,
  });

  expect(ActionCreator.chooseFilmId()).toEqual({
    type: ActionType.CHOOSE_FILM_ID,
    payload: 0,
  });
});
