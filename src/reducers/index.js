import { combineReducers } from "redux";

import currentUser from "./currentUserReducer";
import houseReducer from "./houseSetupReducer";

export default combineReducers({
  user: currentUser,
  form: houseReducer
});
