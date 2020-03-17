import {reducer, ActionType, ActionCreator} from "./state.js";
import {Genres, TabsName} from "../../consts.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
    chosenFilmId: 0,
    currentTab: TabsName.OVERVIEW,
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

it(`Reducer should return selected tab`, () => {
  expect(reducer({
    currentTab: TabsName.OVERVIEW,
  }, {
    type: ActionType.CHANGE_TAB,
    payload: TabsName.DETAILS,
  })).toEqual({
    currentTab: TabsName.DETAILS,
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

  expect(ActionCreator.changeTab()).toEqual({
    type: ActionType.CHANGE_TAB,
    payload: TabsName.OVERVIEW,
  });
});
