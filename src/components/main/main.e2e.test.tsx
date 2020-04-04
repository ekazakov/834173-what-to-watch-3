import * as React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {films} from "../../mock-for-tests";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, Genres, SHOWN_FILMS_DEFAULT} from "../../consts";

configure({
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
