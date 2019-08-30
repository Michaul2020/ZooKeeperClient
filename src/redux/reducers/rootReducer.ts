import cameraReducer from "./cameraReducer";
import { combineReducers } from "redux";
import googleSignInButtonReducer from "./googleSignInButtonReducer";

export default combineReducers({
  camera: cameraReducer,
  googleSignInButton: googleSignInButtonReducer
});
