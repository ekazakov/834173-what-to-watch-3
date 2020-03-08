import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  id: 1,
  name: `Волан-де-Морт против братства кольца`,
  poster: `https://unsplash.it/280/175/`,
  preview: `https://unsplash.it/280/175/`,
};

it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onFilmCardHover={() => {}}
          onFilmCardLeave={() => {}}
          renderPlayer={() => {}}
          onTitleOfMovieClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
