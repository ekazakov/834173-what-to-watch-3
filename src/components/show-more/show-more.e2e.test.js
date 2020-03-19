import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more.jsx";
import {SHOWN_FILMS_DEFAULT} from "../../consts";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  {
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
  },
  {
    id: 2,
    name: `EuroTrip`,
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
  },
  {
    id: 3,
    name: `The Autopsy of Jane Doe`,
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
    favorite: false
  },
  {
    id: 4,
    name: `The Notebook`,
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
    favorite: false
  },
  {
    id: 5,
    name: `Carri`,
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
    favorite: false
  },
  {
    id: 6,
    name: `Carri`,
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
    favorite: false
  },
  {
    id: 7,
    name: `Carri`,
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
    favorite: false
  },
  {
    id: 8,
    name: `Carri`,
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
    favorite: false
  },
  {
    id: 9,
    name: `Carri`,
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
    favorite: false
  },
  {
    id: 10,
    name: `Carri`,
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
    favorite: false
  },
];
const shownFilms = SHOWN_FILMS_DEFAULT;

it(`Click for ShowMore button`, () => {

  const showMoreButtonClick = jest.fn();

  const showMore = mount(
      <ShowMore showMoreFilms={showMoreButtonClick} films={films} shownFilms={shownFilms}/>
  );

  const button = showMore.find(`button.catalog__button`);

  button.simulate(`click`);

  expect(showMoreButtonClick).toHaveBeenCalledTimes(1);
});

