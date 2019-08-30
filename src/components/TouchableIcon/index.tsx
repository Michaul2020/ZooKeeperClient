import * as React from "react";

import {
  GestureResponderEvent,
  Image,
  StyleProp,
  TouchableOpacity,
  ViewStyle
} from "react-native";

import styles from "./style";

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
  imageSource: number;
}

const TouchableIcon = (props: Props) => {
  const { style, onPress, imageSource } = props;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image style={styles.image} source={imageSource}></Image>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
