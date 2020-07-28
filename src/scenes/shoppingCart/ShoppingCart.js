import React from "react";
import { View, Text, Modal } from "react-native";
import { styleShoppingCart } from "./style";

export default ({ turnOnOffShoppingCart = false }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={turnOnOffShoppingCart}
    >
      <View style={styleShoppingCart.content}>
        <Text>Menuxxxx</Text>
      </View>
    </Modal>
  );
};
