import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Genres, SHOWN_FILMS_DEFAULT} from "../../consts";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts.js";
import {films} from "../../mock-for-tests.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      chosenFilmId: films[0].id,
      shownFilms: SHOWN_FILMS_DEFAULT,
    },
    [NameSpace.DATA]: {
      films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            films={films}
            login={() => {}}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            chooseFilmId={() => {}}
            getComments={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
