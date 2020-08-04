import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styleShoppingCartBody } from "../style";
import CardProduct from "../../../components/cardProduct/components/CardProduct";

export default ({ guesses, quantity, cart, actions }) => {
  console.log(cart);
  console.log(guesses);
  console.log(quantity);
  return (
    <ScrollView>
      {cart.map((product) => (
        <CardProduct key={product.id} />
      ))}
    </ScrollView>
  );
};
