import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [
  `Бильбо Сумкин`,
  `Братство кольца`,
  `Невероятные приключения Воланд-де-Морта`
];

it(`Should main render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          movies={movies}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
