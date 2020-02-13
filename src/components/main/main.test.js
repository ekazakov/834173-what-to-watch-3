import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const films = [
  `Бильбо Сумкин`,
  `Братство кольца`,
  `Невероятные приключения Воланд-де-Морта`
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
