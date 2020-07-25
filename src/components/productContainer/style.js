import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";
export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
  containerProduct: {
    alignItems: "center",
    margin: 10,
  },
  rowContainer: {
    margin: 5,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  nameText: {
    paddingTop: 4,
    fontSize: 16,
    color: globalStyle.globalFontColor, //"#364E58",
    fontFamily: "Spartan-Medium",
  },
});
