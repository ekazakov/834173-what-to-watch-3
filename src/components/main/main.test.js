import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Genres} from "../../consts.js";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts.js";
import {MemoryRouter} from "react-router-dom";
import {SHOWN_FILMS_DEFAULT} from "../../consts";
import {films} from "../../mock-for-tests";

const mockStore = configureStore([]);

it(`Should main render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      shownFilms: SHOWN_FILMS_DEFAULT
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
          <MemoryRouter>
            <Main
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              onTitleOfFilmClick={() => {}}
            />
          </MemoryRouter>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
