import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const styles = StyleSheet.create({
  fatherContainer: {
    width: 320,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: globalStyle.globalFontColor, //"rgb(48, 119, 119)",
    borderWidth: 0,
  },

  textButton: {
    fontSize: 20,
    color: globalStyle.globalFontColorButton,
    fontFamily: "Spartan-Medium",
  },
  iconContainer: {
    borderWidth: 0,
    marginRight: 15,
    marginTop: "auto",
    marginBottom: "auto",
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
