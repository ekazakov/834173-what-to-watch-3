import * as React from "react";
import * as renderer from "react-test-renderer";
import PromoFilm from "./promo-film.js";
import {films} from "../../mock-for-tests";
import {MemoryRouter} from "react-router-dom";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {noop} from "../../utils";

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
            onActivePlayerButtonClick={noop}
            promoFilm={films[0]}
          />
        </MemoryRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
