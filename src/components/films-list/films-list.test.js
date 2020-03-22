import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import {MemoryRouter} from "react-router-dom";
import {films} from "../../mock-for-tests";


it(`Should FilmsList render correctly`, () => {

  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmsList
            films={films}
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
