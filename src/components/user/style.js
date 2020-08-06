import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const styles = new StyleSheet.create({
  conent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  nameUser: {
    fontSize: 16,
    padding: 10,
    fontFamily: "Spartan-Bold",
    color: globalStyle.globalFontColor,
  },
});
