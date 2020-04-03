import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {AppRoute, Genres, SHOWN_FILMS_DEFAULT} from "../../consts";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts.js";
import {films} from "../../mock-for-tests.js";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Should PrivateRoute render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      chosenFilmId: films[0].id,
      shownFilms: SHOWN_FILMS_DEFAULT,
    },
    [NameSpace.DATA]: {
      films,
      promoFilm: films[0],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <PrivateRoute
            exact
            path={AppRoute.ROOT}
            render={() => {}}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
