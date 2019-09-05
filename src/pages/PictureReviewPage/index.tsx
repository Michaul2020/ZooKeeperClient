import * as React from "react";

import { Dimensions, Image, ScrollView, View } from "react-native";
import getSuggestedLabels, { Label } from "../../utilities/getSuggestedLabels";

import { CapturedPicture } from "expo-camera/build/Camera.types";
import { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles";

type NavigationProps = {
  navigation: any;
};

type StateProps = {
  pictureToReview: CapturedPicture;
};

type Props = NavigationProps & StateProps;

class PictureReviewPage extends Component<Props> {
  state = {
    suggestedLabels: []
  };

  componentDidMount = async () => {
    const suggestedLabels: Label[] = await getSuggestedLabels(
      this.props.pictureToReview.base64
    );

    this.setState({ suggestedLabels });
  };

  render() {
    const { navigation, pictureToReview } = this.props;
    const { width, height } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width, height }}
            resizeMode="contain"
            source={{ uri: pictureToReview.uri }}
          />
          {this.state.suggestedLabels}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { pictureToReview: state.camera.pictureToReview };
};

export default connect(mapStateToProps)(PictureReviewPage);
