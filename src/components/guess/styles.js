import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";
export const styles = new StyleSheet.create({
  guessTextInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#5B6564",
    width: 60,
    height: 35,
    textAlign: "center",
    fontSize: 20,
  },
  guessText: {
    fontSize: 20,
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "Spartan-Medium",
    color: globalStyle.globalFontColor,
  },
  container: {
    position: "relative",
    flexDirection: "row",
    padding: 5,
  },
});
