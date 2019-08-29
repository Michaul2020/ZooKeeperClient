import * as React from "react";

import { Button, StyleProp, TouchableOpacity, ViewStyle } from "react-native";

type Navigation = {
  navigate: Function;
};

type InheritedProps = {
  navigation: Navigation;
  style?: StyleProp<ViewStyle>;
};

type Props = InheritedProps;

const SkipSignInButton = (props: Props) => {
  const { style, navigation } = props;
  return (
    <TouchableOpacity style={style}>
      <Button
        title="Skip sign-in"
        onPress={() => navigation.navigate("HomePage")}
      />
    </TouchableOpacity>
  );
};

export default SkipSignInButton;
