import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Operation as DataOperation, ActionCreator as DataActionCreator} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator as UserActionCreator} from "./reducer/user/user.js";
import {AuthorizationStatus, ServerStatus} from "./consts";
import {composeWithDevTools} from "redux-devtools-extension";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
};

const onServerFailed = () => {
  store.dispatch(DataActionCreator.requiredServer(ServerStatus.NO_AVAILABLE));
};

const api = createAPI(onUnauthorized, onServerFailed);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(DataOperation.loadFavoriteFilms());

store.dispatch(UserOperation.checkAuth()).finally(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          getComments={(id) => {
            store.dispatch(DataOperation.loadComments(id));
          }}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
