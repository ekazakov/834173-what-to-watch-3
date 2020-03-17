import {extend} from "../../utils.js";
import {Genres, TabsName} from "../../consts.js";

const initialState = {
  genre: Genres.ALL,
  chosenFilmId: 0,
  currentTab: TabsName.OVERVIEW,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
  CHANGE_TAB: `CHANGE_TAB`,
};

const ActionCreator = {
  changeGenre: (genre = Genres.ALL) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  chooseFilmId: (id = 0) => ({
    type: ActionType.CHOOSE_FILM_ID,
    payload: id,
  }),
  changeTab: (tab = TabsName.OVERVIEW) => ({
    type: ActionType.CHANGE_TAB,
    payload: tab,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.CHOOSE_FILM_ID:
      return extend(state, {
        chosenFilmId: action.payload,
      });
    case ActionType.CHANGE_TAB:
      return extend(state, {
        currentTab: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
