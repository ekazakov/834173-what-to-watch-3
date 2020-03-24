import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {films} from "../../mock-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title of movie be pressed`, () => {
  const onTitleOfFilmClick = jest.fn();
  const onActivePlayerButtonClick = jest.fn();

  const main = shallow(
      <Main
        onTitleOfFilmClick={onTitleOfFilmClick}
        onActivePlayerButtonClick={onActivePlayerButtonClick}
        promoFilm={films[0]}
      />
  );

  const titlesOfMovie = main.find(`.small-movie-card__link`);

  titlesOfMovie.forEach((title) => {
    title.props().onClick();
  });


  expect(onTitleOfFilmClick).toHaveBeenCalledTimes(titlesOfMovie.length);
});
