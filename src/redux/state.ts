export type State = {
  signedIn: boolean;
  name?: string;
  photoUrl?: string;
};

export const INITIAL_STATE: State = {
  signedIn: false,
  name: null,
  photoUrl: null
};