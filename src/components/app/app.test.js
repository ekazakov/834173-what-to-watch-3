import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movies = [
  `Бильбо Сумкин`,
  `Братство кольца`,
  `Невероятные приключения Воланд-де-Морта`
];

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          movies={movies}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
