import * as Permissions from "expo-permissions";

import {
  CapturedPicture,
  PictureOptions
} from "expo-camera/build/Camera.types";
import { Dimensions, Text, View } from "react-native";
import React, { Component } from "react";
import {
  cameraIcon,
  flashIcon,
  flipCameraIcon,
  noFlashIcon
} from "../../utilities/img/index";

import { Camera } from "expo-camera";
import TouchableIcon from "../../components/TouchableIcon";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getBestCameraRatio from "../../utilities/getBestCameraRatio";
import { snapPhoto } from "../../redux/reducers/cameraReducer";
import styles from "./styles";

interface Props {
  navigation: any;
  snapPhoto: Function;
}

class CameraPage extends Component<Props> {
  state = {
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    ratio: "16:9",
    isSnappingPhoto: false
  };
  camera: Camera;

  useBestCameraRatio = async () => {
    if (this.camera) {
      const { width, height } = Dimensions.get("window");
      const bestRatio = getBestCameraRatio(
        width,
        height,
        await this.camera.getSupportedRatiosAsync()
      );

      this.setState({
        ratio: bestRatio
      });
    }
  };

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  snapPhoto = async (navigation, snapPhoto) => {
    if (this.camera && !this.state.isSnappingPhoto) {
      this.state.isSnappingPhoto = true;
      const options: PictureOptions = {
        quality: 1,
        base64: true,
        exif: true,
        skipProcessing: true
      };
      const capturedPicture: CapturedPicture = await this.camera.takePictureAsync(
        options
      );
      capturedPicture.exif.Orientation = 1;
      snapPhoto(capturedPicture);

      navigation.navigate("PictureReviewPage");
      this.state.isSnappingPhoto = false;
    }
  };

  flipCamera = () => {
    this.setState({
      cameraType:
        this.state.cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  toggleFlash = () => {
    this.setState({
      flashMode:
        this.state.flashMode === Camera.Constants.FlashMode.on
          ? Camera.Constants.FlashMode.off
          : Camera.Constants.FlashMode.on
    });
  };

  render() {
    const { hasCameraPermission, flashMode } = this.state;
    const { navigation, snapPhoto } = this.props;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (!hasCameraPermission) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.wrappingView}>
          <Camera
            flashMode={flashMode}
            ratio={"16:9"}
            style={styles.camera}
            type={this.state.cameraType}
            onCameraReady={this.useBestCameraRatio.bind(this)}
            ref={ref => (this.camera = ref)}
          >
            <View style={styles.subView}>
              <TouchableIcon
                style={styles.touchableFlip}
                onPress={this.flipCamera}
                imageSource={flipCameraIcon}
              />
              <TouchableIcon
                style={styles.touchableFlash}
                onPress={this.toggleFlash}
                imageSource={flashMode ? flashIcon : noFlashIcon}
              />
              <TouchableIcon
                style={styles.touchableSnapPhoto}
                onPress={this.snapPhoto.bind(this, navigation, snapPhoto)}
                imageSource={cameraIcon}
              />
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      snapPhoto
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(CameraPage);
