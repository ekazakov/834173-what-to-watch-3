import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film.js";
import {films} from "../../mock-for-tests.js";
import {MemoryRouter} from "react-router-dom";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should PromoFilm render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <PromoFilm
            onActivePlayerButtonClick={() => {}}
            promoFilm={films[0]}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
