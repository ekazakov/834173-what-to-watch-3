import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Genres} from "../../consts.js";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts.js";
import {MemoryRouter} from "react-router-dom";

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
];

const mockStore = configureStore([]);

it(`Should main render correctly`, () => {
  const store = mockStore({
    [NameSpace.STATE]: {
      genre: Genres.ALL,
    },
    [NameSpace.DATA]: {
      films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              films={films}
              onTitleOfFilmClick={() => {}}
            />
          </MemoryRouter>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
