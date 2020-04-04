import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmCard from "./film-card.js";
import {MemoryRouter} from "react-router-dom";
import {films} from "../../mock-for-tests";

const film = films[0];

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={film}
            onFilmCardHover={() => {}}
            onFilmCardLeave={() => {}}
            renderPlayer={() => {}}
            onFilmClick={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
