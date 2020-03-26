import {extend} from "../../utils.js";
import {normalizeFilmsData, normalizeFilmData} from "../../utils.js";
import NameSpace from "../name-space";

const initialState = {
  films: [],
  comments: [],
  promoFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },
  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(normalizeFilmsData(response.data)));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
        .then((response) => {
          dispatch(ActionCreator.loadComments(response.data));
        });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(normalizeFilmData(response.data)));
      });
  },
  postComment: (commentData, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.id}`, {
      rating: commentData.rating,
      comment: commentData.comment,
    })
      .then(() => {
        onSuccess();

      })
      .catch(() => {
        onError();
      });
  },
  changeFavorite: (film, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${status}`)
    .then((response) => {
      const addedFilm = normalizeFilmData(response.data);
      const state = getState();

      if (addedFilm.id === state[NameSpace.DATA].promoFilm.id) {
        dispatch(ActionCreator.loadPromoFilm(addedFilm));
      }

      state[NameSpace.DATA].films.map((movie) => {
        if (movie.id === addedFilm.id) {
          dispatch(Operation.loadFilms());
        }
      });
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
