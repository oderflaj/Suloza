import React from "react";
import { View, Modal, TouchableWithoutFeedback } from "react-native";
import { styleShoppingCart } from "./style";
import ShoppingCartHeader from "./components/ShoppingCartHeader";
import ShoppingCartBody from "./components/ShoppingCartBody";
import { globalStyle } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
//<Ionicons name="ios-close-circle-outline" size={24} color="black" />
export default ({ turnOnOffShoppingCart, actions }) => {
  console.log(turnOnOffShoppingCart);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={turnOnOffShoppingCart}
    >
      <View style={styleShoppingCart.content}>
        <View style={styleShoppingCart.closeButton}>
          <TouchableWithoutFeedback
            onPress={() => actions.turnOnOffShoppingCart()}
          >
            <View>
              <Ionicons
                name="ios-close-circle-outline"
                size={34}
                color={globalStyle.globalFontColor}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ShoppingCartHeader />
        <ShoppingCartBody />
      </View>
    </Modal>
  );
};
