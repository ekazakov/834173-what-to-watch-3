import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import {films} from "../../mock-for-tests.js";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should AddReview render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <AddReview
          onSubmit={() => {}}
          onTextChange={() => {}}
          onRatingChange={() => {}}
          buttonIsAvailable={true}
          formIsAvailable={true}
          film={films[0]}
        />
      </Provider>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
