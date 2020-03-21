import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, Genres, SHOWN_FILMS_DEFAULT, TabsName} from "../../consts";
import {films, comments} from "../../mock-for-tests";

const mockStore = configureStore([]);

it(`Should FilmsList render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      chosenFilmId: films[0].id,
      currentTab: TabsName.OVERVIEW,
    },
    [NameSpace.DATA]: {
      films,
      comments,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <MemoryRouter>
          <Provider store={store}>
            <FilmsList
              films={films}
              shownFilms={SHOWN_FILMS_DEFAULT}
              onTitleOfFilmClick={() => {}}
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
