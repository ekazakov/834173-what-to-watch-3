import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const movies = [
  `Бильбо Сумкин`,
  `Братство кольца`,
  `Невероятные приключения Воланд-де-Морта`
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title of movie be pressed`, () => {
  const onTitleOfMovieClick = jest.fn();

  const main = shallow(
      <Main
        movies={movies}
        onTitleOfMovieClick={onTitleOfMovieClick}
      />
  );

  const titlesOfMovie = main.find(`.small-movie-card__link`);

  titlesOfMovie.forEach((title) => {
    title.props().onClick();
  });

  expect(onTitleOfMovieClick).toHaveBeenCalledTimes(titlesOfMovie.length);
});
