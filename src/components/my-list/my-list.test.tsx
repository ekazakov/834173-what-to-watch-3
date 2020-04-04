import * as React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import * as renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import MyList from "./my-list";
import {films} from "../../mock-for-tests";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../consts";
import {noop} from "../../utils";

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
          <MyList onFilmClick={noop}/>
        </MemoryRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
