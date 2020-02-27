import {extend} from "./utils.js";
import {Genres} from "./consts.js";
import films from "./mocks/films.js";

const initialState = {
  genre: Genres.ALL,
  films,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre = Genres.ALL) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
