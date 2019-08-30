import * as React from "react";

import { Image, Text, View } from "react-native";

import GoogleSignInButton from "../../components/GoogleSignInButton";
import SkipSignInButton from "../../components/SkipSignInButton";
import { logo } from "../../utilities/img/index";
import styles from "./styles";

interface Props {
  navigation: any;
}

const LoginPage = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.zookeeperText}>ZooKeeper</Text>
      <GoogleSignInButton
        style={styles.googleSignInButton}
        navigation={navigation}
      />

      <SkipSignInButton navigation={navigation} />
    </View>
  );
};

export default LoginPage;
