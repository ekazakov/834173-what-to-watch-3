import React from "react";
import renderer from "react-test-renderer";
import {films} from "../../mock-for-tests.js";
import MyListButton from "./my-list-button.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

it(`Should MyListButton render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films,
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <MyListButton
          film={films[0]}
          changeFavorite={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
