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
  },
  headerCenter: {
    justifyContent: "space-around",
    width: "50%",
  },
  headerCenterFont: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  headerRight: {
    justifyContent: "space-around",
  },
  mainContent: {
    backgroundColor: "transparent",
    height: "100%",
  },
});
