import {reducer, Operation, ActionType} from "./data.js";
import {createAPI} from "../../api.js";
import MockAdapter from "axios-mock-adapter";
import {films, comments} from "../../mock-for-tests.js";
import {ServerStatus} from "../../consts";

const api = createAPI(() => {});

const promoFilm = films[0];

const favoriteFilms = [];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    comments: [],
    promoFilm: null,
    favoriteFilms: [],
    serverStatus: ServerStatus.AVAILABLE,
  });
});

it(`Reducer should update films by load films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

it(`Reducer should load comments by current film`, () => {
  expect(reducer({
    comments: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  })).toEqual({
    comments,
  });
});

it(`Reducer should load promoFilm`, () => {
  expect(reducer({
    promoFilm: {},
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: promoFilm,
  })).toEqual({
    promoFilm,
  });
});

it(`Reducer should load favoriteFilms`, () => {
  expect(reducer({
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: favoriteFilms,
  })).toEqual({
    favoriteFilms,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock.onGet(`/films`).reply(200, [{}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{}],
        });
      });
  });

  it(`Should make a correct API call to /comments/1`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmId = films[1].id;
    const commentsLoader = Operation.loadComments(filmId);

    apiMock.onGet(`/comments/${filmId}`).reply(200, [{}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadPromoFilm();

    apiMock.onGet(`/films/promo`).reply(200, {});

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: {},
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadFavoriteFilms();

    apiMock.onGet(`/favorite`).reply(200, [{}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{}],
        });
      });
  });
});
