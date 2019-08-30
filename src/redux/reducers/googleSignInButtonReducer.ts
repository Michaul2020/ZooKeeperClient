import { SIGN_IN } from "../types";

export const signIn = googleResponse => ({
  type: SIGN_IN,
  payload: googleResponse
});

export type GoogleSignInState = {
  signedIn: boolean;
  name?: string;
  photoUrl?: string;
  googleId?: string;
};

const GOOGLE_INITIAL_STATE: GoogleSignInState = {
  signedIn: false,
  name: null,
  photoUrl: null,
  googleId: null
};

const googleSignInButtonReducer = (
  state: GoogleSignInState = GOOGLE_INITIAL_STATE,
  action
): GoogleSignInState => {
  switch (action.type) {
    case SIGN_IN:
      const { name, photoUrl, id } = action.payload;
      return { ...state, signedIn: true, name, photoUrl, googleId: id };
    default:
      return state;
  }
};

export default googleSignInButtonReducer;
