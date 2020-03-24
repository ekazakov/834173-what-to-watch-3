import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film.jsx";
import {films} from "../../mock-for-tests.js";
import {MemoryRouter} from "react-router-dom";

const promoFIlm = films[0];

it(`Should PromoFilm render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PromoFilm
          onActivePlayerButtonClick={() => {}}
          promoFilm={promoFIlm}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
