import * as Google from "expo-google-app-auth";
import * as React from "react";

import { Button, Text, View } from "react-native";

import appConfig from "../../../app.json";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signIn } from "../../redux/reducers/loginPageReducer";
import styles from "./styles";

type Navigation = {
  navigate: Function;
};

type NavigationProps = {
  navigation: Navigation;
};

type DispatchProps = {
  signIn: Function;
};

type Props = NavigationProps & DispatchProps;

const googleSignIn = async signIn => {
  const googleSignInResponse: Google.LogInResult = await Google.logInAsync({
    clientId: appConfig.googleAuth.clientId,
    scopes: appConfig.googleAuth.scopes
  });

  if (googleSignInResponse.type === "success") {
    const { name, photoUrl, id } = googleSignInResponse.user;
    signIn({ name, photoUrl, id });
  }
};

const LoginPage = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("HomePage")}
      />
      <Button
        title="Sign in with Google"
        onPress={() => googleSignIn(props.signIn)}
      ></Button>
    </View>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signIn
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
