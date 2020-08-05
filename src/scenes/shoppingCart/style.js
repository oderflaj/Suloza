import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles.js";

export const colorCart = globalStyle.globalFontColor;

export const styleShoppingCart = new StyleSheet.create({
  content: {
    backgroundColor: globalStyle.globalBackgroundColor,
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 100,
  },
});

export const styleShoppingCartHeader = new StyleSheet.create({
  content: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 40,
    paddingBottom: 10,
    paddingRight: 45,
    //Android
    elevation: 2,
    //IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    // background color must be set
    backgroundColor: 0, // invisible color
    borderRadius: 2,
    width: "110%",
    top: -2,
  },
  userImage: {
    borderWidth: 0,
    marginLeft: 20,
    marginRight: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  infoBase: {
    borderWidth: 0,
    flex: 1,
  },
  infoBaseText: {
    fontFamily: "Spartan-Bold",
    color: globalStyle.globalFontColor,
    marginBottom: 10,
    fontSize: 16,
  },
  asistantsContainer: {
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  asistantsText: {
    fontFamily: "Spartan-Medium",
    marginBottom: "auto",
    marginTop: "auto",
  },
  asistantsTextInput: {},
});

export const styleShoppingCartBody = new StyleSheet.create({
  container: {
    borderWidth: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  footerContainer: {
    borderWidth: 0,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: "row",
    borderWidth: 0,
    width: "80%",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  footerTitle: {
    fontFamily: "Spartan-Bold",
    fontSize: 18,
    color: globalStyle.globalFontColor,
  },
  footerValue: {
    fontFamily: "Spartan-Medium",
    fontSize: 20,
    color: globalStyle.globalFontColor,
  },
  footerControls: {
    borderWidth: 0,
    justifyContent: "space-around",
    height: 150,
  },
  messageCart: {
    marginTop: 80,
    borderWidth: 0,
    width: "80%",
  },
  messageCartText: {
    fontFamily: "Spartan-Medium",
    fontSize: 20,
    color: globalStyle.globalFontColor,
    textAlign: "center",
  },
});

export const styles = new StyleSheet.create({
  cartIcon: {
    /*
    borderColor:"#7C746E",
    borderWidth:0,
    */
    left: 8,
    top: 8,
    position: "relative",
  },
  cartCount: {
    borderRadius: 50,
    /*backgroundColor: colorCart,*/
    position: "absolute",
    padding: 2,
    zIndex: 10,
    right: 18,
    top: 20,
    borderColor: colorCart,
    borderWidth: 0,
  },
  cartCountFount: {
    color: colorCart,
    /*color: "#fff",*/
    fontSize: 11,
    fontFamily: "Spartan-Medium",
  },
  imageContent: {
    position: "relative",
    borderRadius: 50,
    borderColor: colorCart,
    borderWidth: 0,
    height: 60,
    width: 60,
  },
  cartContainer: {
    position: "relative",
    alignItems: "baseline",
  },

  guessLabel: {
    color: colorCart,
    fontSize: 12,
    fontFamily: "Spartan-Medium",
  },
});
