import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import MyList from "./my-list.jsx";
import {films} from "../../mock-for-tests.js";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";

const mockStore = configureStore([]);

it(`Should MyList render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      favoriteFilms: films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <MyList onTitleOfFilmClick={() => {}}/>
        </MemoryRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
