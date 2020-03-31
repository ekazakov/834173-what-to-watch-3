import axios from "axios";
import history from "./history.js";
import {AppRoute} from "./consts.js";
import {ServerStatus} from "./consts";
import {ActionCreator} from "./reducer/data/data.js";

const Error = {
  UNAUTHORIZED: 401,
  SERVER_ERRORS: 500,
};

const LOGIN_URL = `https://htmlacademy-react-3.appspot.com/wtw/login`;

export const createAPI = (onUnauthorized, onServerFailed) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    ActionCreator.requiredServer(ServerStatus.AVAILABLE);
    return response;
  };

  const onError = (err) => {
    const {response, request} = err;

    if (!response || response.status >= Error.SERVER_ERRORS) {
      onServerFailed();
      history.push(AppRoute.ROOT);

      throw err;
    }

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      if (request.responseURL !== LOGIN_URL) {
        history.push(AppRoute.LOGIN);
      }
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
