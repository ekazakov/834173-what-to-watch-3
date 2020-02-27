import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {Genres} from "../../consts.js";

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
    poster: `https://unsplash.it/280/175/`,
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
  {
    id: 6,
    name: `Mulan`,
    genre: `history`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 7,
    name: `Jaws`,
    genre: `horror`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 8,
    name: `The Fellowship of the Ring`,
    genre: `fantasy`,
    poster: `https://unsplash.it/280/175/`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const genres = [`all-genres`, `drama`, `comedy`, `thriller`, `romance`, `horror`, `history`, `fantasy`];

it(`Should GenresList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        films={films}
        genre={Genres.ALL}
        genres={genres}
        changeGenre={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});