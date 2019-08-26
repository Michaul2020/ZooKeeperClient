import { INITIAL_STATE, State } from "../state";

import SIGN_IN from "../types";

export const signIn = googleResponse => ({
  type: SIGN_IN,
  payload: googleResponse
});

const loginPageReducer = (state: State = INITIAL_STATE, action): State => {
  switch (action.type) {
    case SIGN_IN:
      const { name, photoUrl, id } = action.payload;
      return { ...state, signedIn: true, name, photoUrl, googleId: id };
    default:
      return state;
  }
};

export default loginPageReducer;
