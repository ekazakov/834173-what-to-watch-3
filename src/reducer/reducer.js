import {combineReducers} from "redux";
import NameSpace from "./name-space";
import {reducer as state} from "./state/state";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";

export default combineReducers({
  [NameSpace.STATE]: state,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
