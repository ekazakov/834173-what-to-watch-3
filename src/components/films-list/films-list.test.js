import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const films = [
  {
    id: 1,
    name: `Бильбо Сумкин`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 2,
    name: `Гарри Поттер и невкусный капуччино`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 3,
    name: `Волан-де-Морт против братства кольца`,
    poster: `https://unsplash.it/280/175/`,
  },
];

it(`Should FilmsList render correctly`, () => {
  const tree = renderer
    .create(
        <FilmsList
          films={films}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
