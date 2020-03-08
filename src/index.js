import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

const films = [{}, {}];

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
