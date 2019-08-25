import * as React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles";
import * as Google from "expo-google-app-auth";
import { signIn } from "../../redux/reducers/loginPageReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

type NavigationProps = {
  navigation: any;
};

type DispatchProps = {
  signIn: Function;
};

type Props = NavigationProps & DispatchProps;

const googleLogIn = async signIn => {
  const googleLogInResponse: Google.LogInResult = await Google.logInAsync({
    clientId:
      "810171739954-eje8m6f7hon2j7ij40i7ppspralg7jcv.apps.googleusercontent.com",
    scopes: ["profile", "email"]
  });

  if (googleLogInResponse.type === "success") {
    const { name, photoUrl } = googleLogInResponse.user;
    signIn({ name, photoUrl });
  }
};

const LoginPage = (props: Props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("HomePage")}
      />
      <Button
        title="Sign in with Google"
        onPress={() => googleLogIn(props.signIn)}
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
