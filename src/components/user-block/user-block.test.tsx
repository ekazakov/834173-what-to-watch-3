import * as React from "react";
import * as renderer from "react-test-renderer";
import UserBlock from "./user-block";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {films, comments} from "../../mock-for-tests";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`Should UserBlock render correctly`, () => {
  it(`Should render for no-authorization user`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films,
        comments,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    const tree = renderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <UserBlock/>
          </Provider>
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render for authorization user`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films,
        comments,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const tree = renderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <UserBlock/>
          </Provider>
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
