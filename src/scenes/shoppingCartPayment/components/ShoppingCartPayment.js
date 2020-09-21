import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  TextInput,
} from "react-native";
import Openpay, { createDeviceSessionId } from "openpay-react-native";
import { styles } from "../style";
import Button from "../../../components/button/componets/Button";
import { globalStyle } from "../../../styles";
import { CartPayment } from "../Services";

export default ({ closeShoppingCartPayment, totalAmount, cart }) => {
  const [loading, setLoading] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [deviceSessionId, setDeviceSessionId] = React.useState("");
  const [activityPayment, setActivityPayment] = React.useState(false);
  const [formStreetNumberValue, setFormStreetNumberValue] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [estate, setEstate] = useState("");

  const successToken = async (response) => {
    console.log(response);
    const deviceSessionId = createDeviceSessionId();
    const token = response.id;

    setToken(`Token: ${token}`);
    setDeviceSessionId(`DeviceSessionId: ${deviceSessionId}`);

    setLoading(false);
    try {
      let userInfo = JSON.parse(await AsyncStorage.getItem("userInformation"));
      console.log(userInfo);

      if (formStreetNumberValue.length < 3) {
        throw "Revise la calle y número de la dirección de entrega.";
      }

      if (neighborhood.length < 3) {
        throw "Revise la colonia que ingreso.";
      }

      if (zip.length < 5) {
        throw "Revise el código postal que ingreso.";
      }

      if (city.length < 4) {
        throw "Revise el campo de ciudad que se ingreso.";
      }

      if (estate.length < 5) {
        throw "Revise el estado que ingreso.";
      }

      let address = `${formStreetNumberValue} Col. ${neighborhood.trim()}, C.P. ${zip} ${city}, ${estate}`;

      let descripcion = `Total de productos solicitados ${cart.length}:`;

      cart.forEach((product) => {
        descripcion += `\nProducto ${product.name}, Piezas ${
          product.units
        }, Precio unitario ${product.price}, Subtotal $${Number(
          product.units * product.price
        )
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
      });

      let bill = {
        name: userInfo.name,
        token: token,
        amount: totalAmount,
        description: descripcion,
        deviceSessionId,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
        cart,
        address: address,
      };

      let payment = {};

      await Alert.alert(
        "Confirmación de Envío.",
        `Dirección de Envío:\n${address}`,
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              setActivityPayment(true);
              console.log("Va a lanzar Pago");
              payment = await CartPayment(bill);
              setActivityPayment(false);
              if (typeof payment.Error != "undefined") {
                throw payment.Error;
              }

              if (payment.statusResponse == "Charge Completed") {
                
              }
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error al realizar el pago!",
        error,
        [
          {
            text: "Aceptar",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }

    //closeShoppingCartPayment(true);

    // Make the call to your server with your charge request
  };

  const failToken = (response) => {
    alert("Su pago fallo al generar el token." + response);
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

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => closeShoppingCartPayment()}
    >
      <View style={styles.container}>
        {activityPayment && (
          <View style={styles.activeIndicatorContainer}>
            <ActivityIndicator
              size="large"
              color={globalStyle.globalFontColor}
            />
          </View>
        )}
        <ScrollView style={styles.subcontainer}>
          <View style={styles.formAddressContent}>
            <Text style={styles.amountTitle}>Dirección de Envío:</Text>
            <Text style={styles.formAddressText}>Calle y Número</Text>
            <TextInput
              style={styles.formAddressTextInput}
              value={formStreetNumberValue}
              onChangeText={(text) => {
                setFormStreetNumberValue(text);
              }}
            />
            <Text style={styles.formAddressText}>Colonia</Text>
            <TextInput
              style={styles.formAddressTextInput}
              value={neighborhood}
              autoCompleteType={"street-address"}
              onChangeText={(text) => {
                setNeighborhood(text);
              }}
            />
            <Text style={styles.formAddressText}>Código Postal</Text>
            <TextInput
              style={styles.formAddressTextInput}
              value={zip}
              autoCompleteType={"postal-code"}
              keyboardType={"number-pad"}
              onChangeText={(text) => {
                setZip(text);
              }}
            />
            <Text style={styles.formAddressText}>Ciudad</Text>
            <TextInput
              style={styles.formAddressTextInput}
              value={city}
              autoCompleteType={"street-address"}
              onChangeText={(text) => {
                setCity(text);
              }}
            />

            <Text style={styles.formAddressText}>Estado</Text>
            <TextInput
              style={styles.formAddressTextInput}
              value={estate}
              onChangeText={(text) => {
                setEstate(text);
              }}
            />
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.amountTitle}>Monto Total:</Text>
            <Text style={styles.amountValue}>{`$${totalAmount}`}</Text>
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
          <View style={styles.buttonContainer}>
            <Button
              title={"Cancelar"}
              fatherConatinerWidth={"100%"}
              backgroundColor={"red"}
              onPress={() => closeShoppingCartPayment()}
            />
          </View>
        </ScrollView>
      </View>
      <Text>{token}</Text>
      <Text>{deviceSessionId}</Text>
    </Modal>
  );
};
