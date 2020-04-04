import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./main.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Genres} from "../../consts";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {MemoryRouter} from "react-router-dom";
import {SHOWN_FILMS_DEFAULT} from "../../consts";
import {films} from "../../mock-for-tests";
import {noop} from "../../utils";

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
              onFilmClick={noop}
              onActivePlayerButtonClick={noop}
              promoFilm={films[0]}
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
