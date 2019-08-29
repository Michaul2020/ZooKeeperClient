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
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginTop: 35,
    right: 10,
    top: 0,
    position: "absolute"
  },
  touchableSnapPhoto: {
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  touchableFlash: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    marginTop: 105,
    right: 10,
    top: 0,
    position: "absolute"
  }
});

export default styles;
