import * as React from "react";

import { Button, Image, Text, View } from "react-native";

import GoogleSignInButton from "../../components/GoogleSignInButton";
import SkipSignInButton from "../../components/SkipSignInButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logo } from "../../utilities/img/index";
import styles from "./styles";

type Navigation = {
  navigate: Function;
};

type NavigationProps = {
  navigation: Navigation;
};

type Props = NavigationProps;

const LoginPage = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}></Image>
      <Text style={styles.zookeeperText}>ZooKeeper</Text>
      <GoogleSignInButton
        style={styles.googleSignInButton}
        navigation={navigation}
      ></GoogleSignInButton>

      <SkipSignInButton
        style={styles.skipButton}
        navigation={navigation}
      ></SkipSignInButton>
    </View>
  );
};

export default LoginPage;
