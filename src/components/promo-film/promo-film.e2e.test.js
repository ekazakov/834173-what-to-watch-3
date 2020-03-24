import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PromoFilm from "./promo-film.jsx";
import {films} from "../../mock-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should active player button click`, () => {
  const onActivePlayerButtonClick = jest.fn();

  const promoFilm = shallow(
      <PromoFilm promoFilm={films[0]} onActivePlayerButtonClick={onActivePlayerButtonClick}/>
  );

  const playButton = promoFilm.find(`.btn--play.movie-card__button`);
  playButton.props().onClick();
  expect(onActivePlayerButtonClick).toHaveBeenCalledTimes(1);
});
