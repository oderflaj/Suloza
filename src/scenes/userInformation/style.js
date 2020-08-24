import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const styles = new StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(96, 105, 127, 0.70)",
    position: "relative",
  },
  subcontainer: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "90%",
    justifyContent: "space-around",
    borderRadius: 5,
    alignItems: "center",
    padding: 20,
  },
  normalText: {
    fontFamily: "Spartan-Bold",
    color: globalStyle.globalFontColor,
    fontSize: 16,
    textAlign: "center",
  },
  facebookButtonContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  formUserInfoContent: {
    width: "100%",
  },
  formUserInfoText: {
    fontFamily: "Spartan-Medium",
    color: globalStyle.globalFontColor,
    fontSize: 15,
  },
  formUserInfoTextInput: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    color: globalStyle.globalFontColor,
    borderColor: globalStyle.globalFontColor,
    paddingLeft: 10,
  },
  activeIndicatorContainer: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(96, 105, 127, 0.30)",
  },
});
