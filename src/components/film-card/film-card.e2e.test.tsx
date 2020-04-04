import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  id: 1,
  name: `Harry Potter and the Goblet of Fire`,
  posterBig: `https://unsplash.it/280/175/`,
  poster: `https://unsplash.it/280/175/`,
  background: `https://unsplash.it/280/175/`,
  backgroundColor: `#ffffff`,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `Самый увлекательный в мире фильм`,
  genre: `drama`,
  rating: 6.7,
  score: 290,
  director: `Tarantino`,
  starring: [`Donatello`, `Rafael`, `Leonardo`],
  duration: 90,
  year: 2067,
  favorite: false,
};

it(`All cards at hover return film information`, () => {
  const onFilmCardHover = jest.fn();
  const onFilmCardLeave = jest.fn();
  const onFilmClick = jest.fn();
  const renderPlayer = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardHover={onFilmCardHover}
        onFilmCardLeave={onFilmCardLeave}
        onFilmClick={onFilmClick}
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
  expect(onFilmClick).toHaveBeenCalledTimes(1);
});
