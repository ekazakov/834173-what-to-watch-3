import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.js";
import {films} from "../../mock-for-tests.js";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, Genres, SHOWN_FILMS_DEFAULT} from "../../consts";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Should title of movie be pressed`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
      chosenFilmId: films[0].id,
      shownFilms: SHOWN_FILMS_DEFAULT,
    },
    [NameSpace.DATA]: {
      films,
      promoFilm: films[0],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const onFilmClick = jest.fn();
  const onActivePlayerButtonClick = jest.fn();

  const main = shallow(
      <Provider store={store}>
        <Main
          onFilmClick={onFilmClick}
          onActivePlayerButtonClick={onActivePlayerButtonClick}
          promoFilm={films[0]}
        />
      </Provider>
  );

  const titlesOfMovie = main.find(`.small-movie-card__link`);

  titlesOfMovie.forEach((title) => {
    title.props().onClick();
  });


  expect(onFilmClick).toHaveBeenCalledTimes(titlesOfMovie.length);
});
