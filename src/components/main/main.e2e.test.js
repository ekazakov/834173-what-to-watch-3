import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";
import {AuthorizationStatus} from "../../consts";

const films = [
  {
    id: 1,
    name: `Harry Potter and the Goblet of Fire`,
    genre: `drama`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 2,
    name: `EuroTrip`,
    genre: `comedy`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 3,
    name: `The Autopsy of Jane Doe`,
    genre: `thriller`,
    poster: ``,
  },
  {
    id: 4,
    name: `The Notebook`,
    genre: `romance`,
    poster: `https://unsplash.it/280/175/`,
  },
  {
    id: 5,
    name: `Carri`,
    genre: `horror`,
    poster: `https://unsplash.it/280/175/`,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title of movie be pressed`, () => {
  const onTitleOfMovieClick = jest.fn();

  const main = shallow(
      <Main
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        films={films}
        onTitleOfMovieClick={onTitleOfMovieClick}
      />
  );

  const titlesOfMovie = main.find(`.small-movie-card__link`);

  titlesOfMovie.forEach((title) => {
    title.props().onClick();
  });

  expect(onTitleOfMovieClick).toHaveBeenCalledTimes(titlesOfMovie.length);
});
