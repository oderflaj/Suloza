import { StyleSheet } from "react-native";

export const globalStyle = {
  globalFontColor: "rgba(54, 78, 88, 1)", //globalFontColor: "rgba(54, 78, 88, 0.82)", rgb(48, 119, 119)
};

export const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "rgba(174, 203, 203, 0.9)",
  },
  layoutContent: {
    position: "relative",
    backgroundColor: "rgba(146, 185, 185, 0.57)",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  headerContent: {
    backgroundColor: "transparent",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerLeft: {
    justifyContent: "space-around",
    width: "25%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  headerCenter: {
    width: "50%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  headerCenterFont: {
    fontSize: 50,
    textAlign: "center",
    color: globalStyle.globalFontColor, //"#364E58",
    fontFamily: "DancingScript-Bold",
  },
  headerRight: {
    width: "25%",
    marginTop: "auto",
    marginBottom: "auto",
    borderWidth: 0,
  },
  mainContent: {
    backgroundColor: "transparent",
    height: "100%",
  },
});
