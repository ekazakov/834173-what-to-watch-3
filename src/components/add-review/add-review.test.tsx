import * as React from "react";
import * as renderer from "react-test-renderer";
import AddReview from "./add-review.js";
import {films} from "../../mock-for-tests";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);

it(`Should AddReview render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <AddReview
            onSubmit={() => {}}
            onTextChange={() => {}}
            onRatingChange={() => {}}
            buttonIsAvailable={true}
            formIsAvailable={true}
            film={films[0]}
            errorMessage={``}
          />
        </MemoryRouter>
      </Provider>

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
