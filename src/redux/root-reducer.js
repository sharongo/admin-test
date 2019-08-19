import { combineReducers } from "redux";

import operatorReducer from "./operator/operator.reducer";

export default combineReducers({
  operator: operatorReducer
});
