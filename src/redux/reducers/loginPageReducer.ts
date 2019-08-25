import { State, INITIAL_STATE } from "../state";
import SIGN_IN from "../types";

export const signIn = googleResponse => ({
  type: SIGN_IN,
  payload: googleResponse
});

const loginPageReducer = (state: State = INITIAL_STATE, action): State => {
  switch (action.type) {
    case SIGN_IN:
      const { name, photoUrl } = action.payload;
      return { signedIn: true, name, photoUrl };
    default:
      return state;
  }
};

export default loginPageReducer;
