import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import {MemoryRouter} from "react-router-dom";
import {SHOWN_FILMS_DEFAULT} from "../../consts";
import {films} from "../../mock-for-tests";


it(`Should FilmsList render correctly`, () => {

  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmsList
            films={films}
            shownFilms={SHOWN_FILMS_DEFAULT}
            onTitleOfFilmClick={() => {}}
          />
        </MemoryRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
