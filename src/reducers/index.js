import { combineReducers } from "redux";
import currentUser from "./currentUserReducer";

export default combineReducers({
  user: currentUser
});
