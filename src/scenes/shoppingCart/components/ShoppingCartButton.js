import * as React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { styles, colorCart } from "../style";

export default ({ guesses, quantity }) => {
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
    <View style={styles.cartContainer}>
      <TouchableWithoutFeedback onPress={() => displayAlert()}>
        <View style={styles.imageContent}>
          <View style={styles.cartCount}>
            <Text style={styles.cartCountFount}>&nbsp;{quantity}&nbsp;</Text>
          </View>
          <View style={styles.cartIcon}>
            {/*<AntDesign name="shoppingcart" size={40} color={colorCart} />*/}
            <FontAwesome name="opencart" size={40} color={colorCart} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.guessLabel}>Asistentes {guesses}</Text>
    </View>
  );
};
