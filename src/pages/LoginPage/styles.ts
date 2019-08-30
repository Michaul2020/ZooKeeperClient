import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 175,
    position: "absolute",
    top: 50
  },
  zookeeperText: {
    fontSize: 44,
    fontWeight: "bold",
    position: "absolute",
    top: 215
  },
  googleSignInButton: {
    position: "absolute",
    bottom: "25%"
  }
});
