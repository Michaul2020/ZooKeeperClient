import * as React from "react";

import { Image, View } from "react-native";

import { connect } from "react-redux";
import styles from "./styles";

type NavigationProps = {
  navigation: any;
};

type StateProps = {
  pictureToReview: string;
};

type Props = NavigationProps & StateProps;

const PictureReviewPage = (props: Props) => {
  const { navigation, pictureToReview } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: pictureToReview }} />
    </View>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { pictureToReview: state.camera.pictureToReview };
};

export default connect(mapStateToProps)(PictureReviewPage);
