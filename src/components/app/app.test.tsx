import * as React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import * as renderer from "react-test-renderer";
import App from "./app.js";
import {Genres, SHOWN_FILMS_DEFAULT} from "../../consts";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {films} from "../../mock-for-tests";
import {noop} from "../../utils";

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
      promoFilm: films[0],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            login={noop}
            isAuthorized={false}
            chooseFilmId={noop}
            getComments={noop}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
