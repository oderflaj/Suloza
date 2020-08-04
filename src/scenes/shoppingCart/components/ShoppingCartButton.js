import * as React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles, colorCart } from "../style";

export default ({ guesses, quantity, actions }) => {
  return (
    <View style={styles.cartContainer}>
      <TouchableWithoutFeedback onPress={() => actions.turnOnOffShoppingCart()}>
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
