import * as React from "react";

import { Button, Text, View } from "react-native";

import styles from "./styles";

type NavigationProps = {
  navigation: any;
};

type Props = NavigationProps;

const HomePage = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button
        title="Go to Login"
        onPress={() => props.navigation.navigate("LoginPage")}
      />
    </View>
  );
};

export default HomePage;
