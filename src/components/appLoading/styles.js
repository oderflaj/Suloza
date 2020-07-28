import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles";

export const stylesAppLoading = new StyleSheet.create({
  content: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loadingTimer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //alignContent: "space-around",
    width: "50%",
  },
  title: {
    marginBottom: 50,
    width: 200,
  },
});
