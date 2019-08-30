import * as Google from "expo-google-app-auth";
import * as React from "react";

import { Image, StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import appConfig from "../../../app.json";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { googleSignInButton } from "../../utilities/img";
import { signIn } from "../../redux/reducers/googleSignInButtonReducer";
import styles from "./styles";

interface InheritedProps {
  navigation: any;
  style?: StyleProp<ViewStyle>;
}

interface DispatchProps {
  signIn?: Function;
}

type Props = InheritedProps & DispatchProps;

const googleSignIn = async (navigation: any, signIn: Function) => {
  const googleSignInResponse: Google.LogInResult = await Google.logInAsync({
    clientId: appConfig.googleAuth.clientId,
    scopes: appConfig.googleAuth.scopes
  });

  if (googleSignInResponse.type === "success") {
    const { name, photoUrl, id } = googleSignInResponse.user;
    signIn({ name, photoUrl, id });
    navigation.navigate("HomePage");
  }
};

const GoogleSignInButton = (props: Props) => {
  const { navigation, signIn, style } = props;
  return (
    <TouchableOpacity
      style={style}
      onPress={() => googleSignIn(navigation, signIn)}
    >
      <Image style={styles.image} source={googleSignInButton}></Image>
    </TouchableOpacity>
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
)(GoogleSignInButton);
