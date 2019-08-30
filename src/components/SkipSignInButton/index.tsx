import * as React from "react";

import { Button, TouchableOpacity } from "react-native";

import styles from "./styles";

interface Props {
  navigation: any;
}

const SkipSignInButton = (props: Props) => {
  const { navigation } = props;
  return (
    <TouchableOpacity style={styles.skipButton}>
      <Button
        title="Skip sign-in"
        onPress={() => navigation.navigate("HomePage")}
      />
    </TouchableOpacity>
  );
};

export default SkipSignInButton;
