import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Genres} from "../../consts.js";
import NameSpace from "../../reducer/name-space";

const films = [
  {
    id: 1,
    name: `Harry Potter and the Goblet of Fire`,
    genre: `drama`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 2,
    name: `EuroTrip`,
    genre: `comedy`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 3,
    name: `The Autopsy of Jane Doe`,
    genre: `thriller`,
    poster: ``,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 4,
    name: `The Notebook`,
    genre: `romance`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 5,
    name: `Carri`,
    genre: `horror`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            films={films}
            onTitleOfMovieClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
