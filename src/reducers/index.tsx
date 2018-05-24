import { combineReducers } from "redux";
import article from "./article";
import info from "./info";
const reducer = combineReducers({
  article,
  info
});
export default reducer;
