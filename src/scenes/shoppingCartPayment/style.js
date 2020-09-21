import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const styles = new StyleSheet.create({
  container: {
    backgroundColor: "rgba(96, 105, 127, 0.70)",
    position: "relative",
    height: "100%",
  },
  subcontainer: {
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    paddingBottom: 20,
    height: "100%",
    position: "relative",
  },
  buttonContainer: {
    width: 256,
    alignSelf: "center",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 30,
  },
  amountTitle: {
    fontFamily: "Spartan-Bold",
    fontSize: 22,
    color: globalStyle.globalFontColor,
  },
  amountValue: {
    fontFamily: "Spartan-Medium",
    fontSize: 24,
    color: globalStyle.globalFontColor,
  },
  activeIndicatorContainer: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(96, 105, 127, 0.50)",
  },

  formAddressContent: {
    width: "90%",
    alignSelf: "center",
    paddingTop: 20,
  },
  formAddressText: {
    fontFamily: "Spartan-Medium",
    color: globalStyle.globalFontColor,
    fontSize: 15,
  },
  formAddressTextInput: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    color: globalStyle.globalFontColor,
    borderColor: globalStyle.globalFontColor,
    paddingLeft: 10,
  },
});
