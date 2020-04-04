import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmsList from "./films-list.js";
import {MemoryRouter} from "react-router-dom";
import {films} from "../../mock-for-tests";
import {noop} from "../../utils";


it(`Should FilmsList render correctly`, () => {

  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmsList
            films={films}
            onFilmClick=noop
          />
        </MemoryRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
