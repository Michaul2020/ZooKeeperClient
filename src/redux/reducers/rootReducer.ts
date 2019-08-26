import { INITIAL_STATE, State } from "../state";

import { combineReducers } from "redux";
import loginPageReducer from "./loginPageReducer";

const rootReducer = (state: State = INITIAL_STATE, action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  root: rootReducer,
  loginPage: loginPageReducer
});
