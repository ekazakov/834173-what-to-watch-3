import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  id: 1,
  name: `Бильбо Сумкин`,
  poster: `https://unsplash.it/280/175/`,
  preview: `https://unsplash.it/280/175/`,
};

it(`All cards at hover return film information`, () => {
  const onFilmCardHover = jest.fn();
  const onFilmCardLeave = jest.fn();
  const onTitleOfMovieClick = jest.fn();
  const renderPlayer = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardHover={onFilmCardHover}
        onFilmCardLeave={onFilmCardLeave}
        onTitleOfMovieClick={onTitleOfMovieClick}
        renderPlayer={renderPlayer}
      />
  );

  const card = filmCard.find(`.small-movie-card`);
  const titleOfMovie = filmCard.find(`.small-movie-card__link`);

  titleOfMovie.props().onClick();

  card.props().onMouseEnter();
  card.props().onMouseLeave();

  expect(onFilmCardHover).toHaveBeenCalledTimes(1);
  expect(onFilmCardHover).toHaveBeenLastCalledWith(film);
  expect(onFilmCardLeave).toHaveBeenCalledTimes(1);
  expect(onFilmCardLeave).toHaveBeenLastCalledWith(film);
  expect(onTitleOfMovieClick).toHaveBeenCalledTimes(1);
});
