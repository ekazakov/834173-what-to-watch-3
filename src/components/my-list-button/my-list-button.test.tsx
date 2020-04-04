import * as React from "react";
import * as renderer from "react-test-renderer";
import {films} from "../../mock-for-tests";
import MyListButton from "./my-list-button";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {noop} from "../../utils";

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
          changeFavorite=noop
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
