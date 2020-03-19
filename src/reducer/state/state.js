import {extend} from "../../utils.js";
import {Genres, TabsName} from "../../consts.js";

const initialState = {
  genre: Genres.ALL,
  chosenFilm: 0,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHOOSE_FILM_ID: `CHOOSE_FILM_ID`,
};

const ActionCreator = {
  changeGenre: (genre = Genres.ALL) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  chooseFilmIndex: (id = 0) => ({
    type: ActionType.CHOOSE_FILM_ID,
    payload: id,
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
        chosenFilm: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
