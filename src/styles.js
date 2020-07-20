import { StyleSheet } from "react-native";
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
  },
  headerCenter: {
    width: "50%",
  },
  headerCenterFont: {
    fontSize: 50,
    textAlign: "center",
    color: "#364E58",
    fontFamily: "DancingScript-Bold",
  },
  headerRight: {
    width: "25%",

    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  mainContent: {
    backgroundColor: "transparent",
    height: "100%",
  },
});
