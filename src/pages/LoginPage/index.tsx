import * as React from "react";

import { Button, Text, View } from "react-native";

import styles from "./styles";

type NavigationProps = {
  navigation: any;
};

type Props = NavigationProps;

const LoginPage = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("HomePage")}
      />
    </View>
  );
};

export default LoginPage;
