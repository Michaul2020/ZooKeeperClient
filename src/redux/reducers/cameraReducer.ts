import { CapturedPicture } from "expo-camera/build/Camera.types";
import { SNAP_PHOTO } from "../types";

// TODO: Update snapPhoto to take an array of suggested labels and update the camera reducer
export const snapPhoto = (pictureToReview: CapturedPicture) => ({
  type: SNAP_PHOTO,
  payload: pictureToReview
});

export type CameraState = {
  pictureToReview?: string;
};

const CAMERA_INITIAL_STATE: CameraState = {
  pictureToReview: null
};

const cameraReducer = (
  state: CameraState = CAMERA_INITIAL_STATE,
  action
): CameraState => {
  switch (action.type) {
    case SNAP_PHOTO:
      const pictureToReview = action.payload;
      return { pictureToReview };
    default:
      return state;
  }
};

export default cameraReducer;
