import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  guessLabel: {
    fontWeight: "bold",
    color: "#364E58",
    fontStyle: "italic",
    marginTop: 5,
  },
  guessCount: {
    fontWeight: "bold",
    fontSize: 15,
  },
  contentMenuButton: {
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 5,
  },
});

export const stylesContent = StyleSheet.create({
  content: {
    position: "relative",
    flexDirection: "column",
    backgroundColor: "rgb(215, 233, 233)",
    height: "100%",
    width: "85%",
    borderRightWidth: 1,
    borderTopRightRadius: 6,
  },
  centeredView: {
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  userView: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  guessView: {},
  productContainerView: {},
  closeMenuContent: {
    position: "absolute",
    right: 13,
    top: 13,
  },
});
