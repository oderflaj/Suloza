import { StyleSheet } from "react-native";

export const colorCart = "#364E58";

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
