import * as Permissions from "expo-permissions";

import { Text, TouchableOpacity, View } from "react-native";

import { Camera } from "expo-camera";
import { CapturedPicture } from "expo-camera/build/Camera.types";
import React from "react";
import styles from "./styles";

export default class CameraPage extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };
  camera: Camera;

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  async snapPhoto() {
    if (this.camera) {
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };
      const capturedPicture: CapturedPicture = await this.camera.takePictureAsync(
        options
      );
      capturedPicture.exif.Orientation = 1;
    }
  }

  flipCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (!hasCameraPermission) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.wrappingView}>
          <Camera
            style={styles.camera}
            type={this.state.type}
            ref={ref => (this.camera = ref)}
          >
            <View style={styles.subView}>
              <TouchableOpacity
                style={styles.container}
                onPress={this.flipCamera}
              >
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableSnapPhoto}
                onPress={this.snapPhoto.bind(this)}
              >
                <Text style={styles.text}>Take Picture</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
