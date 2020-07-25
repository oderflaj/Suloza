import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const styles = StyleSheet.create({
  fatherContainer: {
    width: 320,
  },
  container: {
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: globalStyle.globalFontColor, //"rgb(48, 119, 119)",
  },

  textButton: {
    fontSize: 20,
    color: "rgba(219, 219, 219, 1)",
    fontFamily: "Spartan-Medium",
  },
});

/*
export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "rgba(54, 78, 88, 0.82)",
    backgroundColor: "rgba(34, 148, 148, 0.28)",
    alignSelf: "center",
    margin: "auto",
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  textButton: {
    fontSize: 20,
    color: "rgba(54, 78, 88, 0.82)",
  },
});
 */
