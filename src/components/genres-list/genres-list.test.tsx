import * as React from "react";
import * as renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {Genres} from "../../consts";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, SHOWN_FILMS_DEFAULT} from "../../consts";
import {films, comments, genres} from "../../mock-for-tests";
import {noop} from "../../utils";

const mockStore = configureStore([]);

it(`Should GenresList render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      chosenFilmId: films[0].id,
      shownFilms: SHOWN_FILMS_DEFAULT,
    },
    [NameSpace.DATA]: {
      films,
      comments,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });


  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <GenresList
            genres={genres}
            changeGenre={noop}
            onFilmClick={noop}
            resetFilmsAmount={noop}
            filteredFilms={films}
          />
        </Provider>
      </MemoryRouter>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
