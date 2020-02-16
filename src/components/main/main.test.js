import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const films = [
  {
    id: 1,
    name: `Harry Potter and the Goblet of Fire`,
    genre: `drama`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 2,
    name: `EuroTrip`,
    genre: `comedy`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 3,
    name: `The Autopsy of Jane Doe`,
    genre: `thriller`,
    poster: ``,
  },
  {
    id: 4,
    name: `The Notebook`,
    genre: `romance`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 5,
    name: `Carri`,
    genre: `horror`,
    poster: `https://unsplash.it/280/175/`,
  },
];

it(`Should main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          films={films}
          onTitleOfMovieClick={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
