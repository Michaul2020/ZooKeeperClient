import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrappingView: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  subView: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  touchableFlip: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  touchableSnapPhoto: {
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "white"
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginTop: 35,
    right: 10,
    position: "absolute"
  }
});

export default styles;
