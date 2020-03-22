import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {MemoryRouter} from "react-router-dom";
import {films} from "../../mock-for-tests.js";

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
            onTitleOfFilmClick={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
