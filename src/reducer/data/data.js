import {ServerStatus} from "../../consts.js";
import {normalizeFilmsData, normalizeFilmData, extend} from "../../utils.js";

const initialState = {
  films: [],
  comments: [],
  promoFilm: null,
  favoriteFilms: [],
  serverStatus: ServerStatus.AVAILABLE,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  SET_FAVORITE_STATUS: `SET_FAVORITE_STATUS`,
  REQUIRED_SERVER: `REQUIRED_SERVER`,
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
  loadFavoriteFilms: (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };
  },
  setFavoriteStatus: (id) => {
    return {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: id,
    };
  },
  requiredServer: (status) => {
    return {
      type: ActionType.REQUIRED_SERVER,
      payload: status,
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
      .then((response) => {
        onSuccess();
        dispatch(ActionCreator.loadComments(response.data));
      })
      .catch(() => {
        onError();
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteFilms(normalizeFilmsData(response.data)));
      });
  },
  changeFavorite: (film, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${status}`)
    .then((response) => {

      dispatch(ActionCreator.setFavoriteStatus(response.data.id));
      dispatch(Operation.loadFavoriteFilms());
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
    case ActionType.SET_FAVORITE_STATUS:
      return extend(state, {
        films: state.films.map((film) => {
          if (film.id === action.payload) {
            return extend(film, {
              favorite: !film.favorite,
            });
          }

          return film;
        }),
        promoFilm: extend(state.promoFilm, {
          favorite: state.promoFilm.id === action.payload ? !state.promoFilm.favorite : state.promoFilm.favorite,
        })
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.REQUIRED_SERVER:
      return Object.assign({}, state, {
        serverStatus: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
