import { SNAP_PHOTO } from "../types";

export const snapPhoto = (pictureToReview: string) => ({
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
