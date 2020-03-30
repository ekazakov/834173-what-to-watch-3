import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";
import {Genres} from "../../consts.js";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, SHOWN_FILMS_DEFAULT} from "../../consts";
import {films, comments, genres} from "../../mock-for-tests";

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
            changeGenre={() => {}}
            onFilmClick={() => {}}
            resetFilmsAmount={() => {}}
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
