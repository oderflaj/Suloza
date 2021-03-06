import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { styleShoppingCartBody } from "../style";
import CardProduct from "../../../components/cardProduct/components/CardProduct";
import Button from "../../../components/button/componets/Button";
import { Octicons, FontAwesome } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import ShoppingCartPayment from "../../shoppingCartPayment/components/ShoppingCartPayment";
import UserInformation from "../../userInformation/components/UserInformation";

export default ({
  guesses,
  quantity,
  cart,
  userInformation,
  order,
  actions,
}) => {
  let money = 0;

  const [activeOpenPay, setActiveOpenPay] = useState(false);
  const [
    openUserInformationModal,
    setOpenUserInformationModal,
  ] = React.useState(false);

  const [showStatusOrder, setShowStatusOrder] = useState(false);

  //Sum price X units
  cart.forEach((product) => {
    money += product.price * product.units;
  });

  const ClearCart = () => {
    Alert.alert(
      "Confirmación",
      "¿Desea limpiar la selección de productos?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            cart.forEach((product) => actions.removeProduct(product.id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  React.useEffect(() => {
    console.log(order);
  }, []);

  const closeUserInformation = () => {
    setOpenUserInformationModal(false);
  };

  const closeShoppingCartPayment = () => {
    setActiveOpenPay(false);
  };

  const showStatusOrderSection = (show) => {
    setShowStatusOrder(show);
  };

  const validUserInformation = () => {
    if (Object.keys(userInformation).length == 0) {
      setOpenUserInformationModal(true);
    } else {
      setActiveOpenPay(true);
    }
  };

  return quantity == 0 || guesses == 0 ? (
    <View style={styleShoppingCartBody.messageCart}>
      <Text style={styleShoppingCartBody.messageCartText}>
        No hay Productos seleccionados ó Asistentes!
      </Text>
    </View>
  ) : (
    <ScrollView style={styleShoppingCartBody.container}>
      {openUserInformationModal && (
        <UserInformation closeUserInformation={closeUserInformation} />
      )}
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
        {activeOpenPay && (
          <ShoppingCartPayment
            closeShoppingCartPayment={closeShoppingCartPayment}
            showStatusOrder={showStatusOrderSection}
            totalAmount={`${Number(money)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
            cart={cart}
          />
        )}
        {showStatusOrder ? (
          <View>
            <Text>STATUS ORDER</Text>
          </View>
        ) : (
          <View style={styleShoppingCartBody.footerControls}>
            <Button title={"Solicitar"} onPress={() => validUserInformation()}>
              <Octicons
                name="tasklist"
                size={24}
                color={globalStyle.globalFontColorButton}
              />
            </Button>

            <Button
              title={"Limpiar"}
              backgroundColor={"red"}
              onPress={() => ClearCart()}
            >
              <FontAwesome
                name="trash-o"
                size={24}
                color={globalStyle.globalFontColorButton}
              />
            </Button>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
