import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styleShoppingCartBody } from "../style";
import CardProduct from "../../../components/cardProduct/components/CardProduct";
import Button from "../../../components/button/componets/Button";
import { Octicons, FontAwesome } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";

export default ({ guesses, quantity, cart, actions }) => {
  let money = 0;
  cart.forEach((product) => {
    money += product.price * product.units;
  });

  return quantity == 0 || guesses == 0 ? (
    <View style={styleShoppingCartBody.messageCart}>
      <Text style={styleShoppingCartBody.messageCartText}>
        No hay Productos seleccionados ó Asistentes!
      </Text>
    </View>
  ) : (
    <ScrollView style={styleShoppingCartBody.container}>
      {cart.map((product) => (
        <CardProduct key={product.id} product={product} actions={actions} />
      ))}
      <View style={styleShoppingCartBody.footerContainer}>
        <View style={styleShoppingCartBody.footerRow}>
          <Text style={styleShoppingCartBody.footerTitle}>Asistentes:</Text>
          <Text style={styleShoppingCartBody.footerValue}>{guesses}</Text>
        </View>
        <View style={styleShoppingCartBody.footerRow}>
          <Text style={styleShoppingCartBody.footerTitle}>Total Piezas:</Text>
          <Text style={styleShoppingCartBody.footerValue}>{quantity}</Text>
        </View>
        <View style={styleShoppingCartBody.footerRow}>
          <Text style={styleShoppingCartBody.footerTitle}>Monto Total:</Text>
          <Text style={styleShoppingCartBody.footerValue}>
            {`$${Number(money)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
          </Text>
        </View>

        <View style={styleShoppingCartBody.footerControls}>
          <Button title={"Solicitar"}>
            <Octicons
              name="tasklist"
              size={24}
              color={globalStyle.globalFontColorButton}
            />
          </Button>
          <Button title={"Limpiar"} backgroundColor={"red"}>
            <FontAwesome
              name="trash-o"
              size={24}
              color={globalStyle.globalFontColorButton}
            />
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
