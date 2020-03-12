import NameSpace from "./name-space.js";
import {combineReducers} from "redux";
import {reducer as state} from "./state/state.js";
import {reducer as data} from "./data/data.js";
import {reducer as user} from "./user/user.js";

export default combineReducers({
  [NameSpace.STATE]: state,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
