import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more.jsx";
import {SHOWN_FILMS_DEFAULT} from "../../consts";

Enzyme.configure({
  adapter: new Adapter(),
});

const shownFilms = SHOWN_FILMS_DEFAULT;

it(`Click for ShowMore button`, () => {

  const showMoreButtonClick = jest.fn();

  const showMore = mount(
      <ShowMore showMoreFilms={showMoreButtonClick} shownFilms={shownFilms} haveMoreFilms={true}/>
  );

  const button = showMore.find(`button.catalog__button`);

  button.simulate(`click`);

  expect(showMoreButtonClick).toHaveBeenCalledTimes(1);
});

