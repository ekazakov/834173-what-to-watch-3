import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmCard from "./film-card.js";
import {MemoryRouter} from "react-router-dom";
import {films} from "../../mock-for-tests";
import {noop} from "../../utils";

const film = films[0];

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <FilmCard
            film={film}
            onFilmCardHover={noop}
            onFilmCardLeave={noop}
            renderPlayer={noop}
            onFilmClick={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
