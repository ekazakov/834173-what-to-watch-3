import * as React from "react";
import {shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import PromoFilm from "./promo-film";
import {films} from "../../mock-for-tests";

configure({
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
