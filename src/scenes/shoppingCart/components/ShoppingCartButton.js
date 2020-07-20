import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const colorCart = "#364E58";

export default () => {
  const count = 18;

  const displayAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => displayAlert()}>
      <View style={styles.imageContent}>
        <View style={styles.cartCount}>
          <Text style={styles.cartCountFount}>&nbsp;{count}&nbsp;</Text>
        </View>
        <View style={styles.cartIcon}>
          <AntDesign name="shoppingcart" size={40} color={colorCart} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = new StyleSheet.create({
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
    backgroundColor: colorCart,
    position: "absolute",
    padding: 2,
    zIndex: 10,
    right: 15,
    top: 5,
  },
  cartCountFount: {
    color: "#fff",
    fontSize: 12,
  },
  imageContent: {
    position: "relative",
    borderRadius: 50,
    borderColor: colorCart,
    borderWidth: 0,
    height: 60,
    width: 60,
  },
});
