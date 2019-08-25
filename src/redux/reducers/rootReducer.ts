import { combineReducers } from "redux";
import { State, INITIAL_STATE } from "../state";
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
