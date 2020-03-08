import {reducer, ActionType, ActionCreator} from "./state.js";
import {Genres} from "../../consts.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
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

it(`Action creators work correctly`, () => {
  expect(ActionCreator.changeGenre()).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ALL,
  });
});
