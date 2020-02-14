import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = [
  {
    id: 1,
    name: `Бильбо Сумкин`,
    poster: `https://unsplash.it/280/175/`,
  }
];

it(`All cards at hover return film information`, () => {
  const onFilmCardHover = jest.fn();
  const onTitleOfMovieClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardHover={onFilmCardHover}
        onTitleOfMovieClick={onTitleOfMovieClick}
      />
  );

  const cards = filmCard.find(`.small-movie-card`);
  const titleOfMovie = filmCard.find(`.small-movie-card__link`);

  titleOfMovie.props().onClick();

  cards.forEach((card) => {
    card.props().onMouseEnter();
  });

  expect(onFilmCardHover).toHaveBeenCalledTimes(cards.length);
  expect(onTitleOfMovieClick).toHaveBeenCalledTimes(1);
});
