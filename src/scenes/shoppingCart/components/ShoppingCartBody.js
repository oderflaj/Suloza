import React from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { styleShoppingCartBody } from "../style";
import CardProduct from "../../../components/cardProduct/components/CardProduct";
import Button from "../../../components/button/componets/Button";
import { Octicons, FontAwesome } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import Openpay, { createDeviceSessionId } from "openpay-react-native";

export default ({ guesses, quantity, cart, actions }) => {
  let money = 0;
  cart.forEach((product) => {
    money += product.price * product.units;
  });

  const ClearCart = () => {
    Alert.alert(
      "Confirmación",
      "¿Desea limpiar la selección de piezas?",
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
    /*
  OpenPay.setId('mwyl4lr7mwshaa8eutfn');
  ​OpenPay.setApiKey('pk_fcf8f304e15e4e0fb686941235e3ce2c');
  OpenPay.setSandboxMode(true);
  console.log("Obtiene modo SandBox")
  console.log(OpenPay.getSandboxMode())
*/
  });

  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [deviceSessionId, setDeviceSessionId] = React.useState("");

  const successToken = (response) => {
    console.log(response);
    const deviceSessionId = createDeviceSessionId();
    const token = response.id;

    console.log(deviceSessionId);
    console.log(token);
    setToken(`Token: ${token}`);
    setDeviceSessionId(`DeviceSessionId: ${deviceSessionId}`);
    setLoading(false);

    // Make the call to your server with your charge request
  };

  const failToken = (response) => {
    console.log("failToken", response);
  };

  /*
  const address = {
    city: "Querétaro",
    country_code: "MX",
    postal_code: "76900",
    line1: "Av 5 de Febrero",
    line2: "Roble 207",
    line3: "Col Carrillo",
    state: "Queretaro",
  };
  */
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
        <Openpay
          isProductionMode={false}
          merchantId="mwyl4lr7mwshaa8eutfn"
          publicKey="pk_fcf8f304e15e4e0fb686941235e3ce2c"
          //address={address}
          successToken={successToken}
          failToken={failToken}
          loading={loading}
        />
        <Text>{token}</Text>
        <Text>{deviceSessionId}</Text>
        <View style={styleShoppingCartBody.footerControls}>
          <Button title={"Solicitar"}>
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
      </View>
    </ScrollView>
  );
};
