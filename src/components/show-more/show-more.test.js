import React from "react";
import renderer from "react-test-renderer";
import {ShowMore} from "./show-more.jsx";
import {SHOWN_FILMS_DEFAULT} from "../../consts";
import {films} from "../../mock-for-tests";

const shownFilms = SHOWN_FILMS_DEFAULT;

it(`Should ShowMore render correctly`, () => {

  const tree = renderer.create(
      <ShowMore films={films} shownFilms={shownFilms} showMoreFilms={() => {}} haveMoreFilms={true}/>
  )
   .toJSON();

  expect(tree).toMatchSnapshot();
});
