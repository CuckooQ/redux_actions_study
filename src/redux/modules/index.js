import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";

const reducer = combineReducers({
  todo,
  user,
});

export default reducer;
