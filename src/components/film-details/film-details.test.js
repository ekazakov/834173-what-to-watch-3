import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details.jsx";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, Genres, SHOWN_FILMS_DEFAULT, TabsName} from "../../consts";
import {MemoryRouter} from "react-router-dom";
import {films, comments} from "../../mock-for-tests.js";

const mockStore = configureStore([]);

describe(`Should FilmDetails render correctly`, () => {
  it(`for auth user`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        genre: Genres.ALL,
        chosenFilm: films[0].id,
        currentTab: TabsName.OVERVIEW,
        shownFilms: SHOWN_FILMS_DEFAULT
      },
      [NameSpace.DATA]: {
        films,
        comments,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <FilmDetails film={films[0]} onFilmClick={() => {}} onActivePlayerButtonClick={() => {}} onAddReviewButtonClick={() => {}}/>
          </MemoryRouter>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`for no-auth user`, () => {
    const store = mockStore({
      [NameSpace.STATE]: {
        genre: Genres.ALL,
        chosenFilm: films[0].id,
        currentTab: TabsName.OVERVIEW,
        shownFilms: SHOWN_FILMS_DEFAULT
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
        <Provider store={store}>
          <MemoryRouter>
            <FilmDetails film={films[0]} onFilmClick={() => {}} onActivePlayerButtonClick={() => {}} onAddReviewButtonClick={() => {}}/>
          </MemoryRouter>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
