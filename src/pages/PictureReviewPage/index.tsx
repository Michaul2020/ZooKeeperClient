import * as React from "react";

import { Image, View } from "react-native";

import { CapturedPicture } from "expo-camera/build/Camera.types";
import { connect } from "react-redux";
import styles from "./styles";

type NavigationProps = {
  navigation: any;
};

type StateProps = {
  pictureToReview: CapturedPicture;
};

type Props = NavigationProps & StateProps;

const PictureReviewPage = (props: Props) => {
  const { navigation, pictureToReview } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: pictureToReview.uri }} />
    </View>
  );
};

const mapStateToProps = state => {
  return { pictureToReview: state.camera.pictureToReview };
};

export default connect(mapStateToProps)(PictureReviewPage);
