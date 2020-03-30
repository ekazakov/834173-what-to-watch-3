import axios from "axios";
import history from "./history.js";
import {AppRoute} from "./consts.js";

const Error = {
  UNAUTHORIZED: 401,
  SERVER_MISTAKES: 500,
};

const LOGIN_URL = `https://htmlacademy-react-3.appspot.com/wtw/login`;

export const createAPI = (onUnauthorized, onServerFailed) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (err) => {
    const {response, request} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      if (request.responseURL !== LOGIN_URL) {
        history.push(AppRoute.LOGIN);
      }
    }

    if (response.status >= Error.SERVER_MISTAKES) {
      onServerFailed();
      history.push(AppRoute.ROOT);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
