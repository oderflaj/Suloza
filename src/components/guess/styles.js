import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";
export const styles = new StyleSheet.create({
  guessTextInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#5B6564",
    width: 60,
    height: 30,
    textAlign: "center",
    fontSize: 16,
  },
  guessText: {
    fontSize: 16,
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "Spartan-Medium",
    color: globalStyle.globalFontColor,
    marginRight: 10,
  },
  container: {
    position: "relative",
    flexDirection: "row",
    padding: 5,
  },
  buttonGuess: {
    padding: 5,
    alignSelf: "center",
  },
});
