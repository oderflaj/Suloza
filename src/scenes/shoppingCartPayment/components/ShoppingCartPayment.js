import React from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
  Alert,
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

  const successToken = async (response) => {
    console.log(response);
    const deviceSessionId = createDeviceSessionId();
    const token = response.id;

    console.log(`DeviceId: ${deviceSessionId}`);
    console.log(`Token: ${token}`);
    setToken(`Token: ${token}`);
    setDeviceSessionId(`DeviceSessionId: ${deviceSessionId}`);
    console.log("Apaga loading....");
    setLoading(false);
    try {
      setActivityPayment(true);
      let userInfo = JSON.parse(await AsyncStorage.getItem("userInformation"));
      console.log(userInfo);
      let bill = {
        name: userInfo.name,
        token: token,
        amount: totalAmount,
        description: `Total de productos solicitados ${cart.lenght}`,
        deviceSessionId,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
        cart,
      };

      let payment = await CartPayment(bill);

      if (typeof payment.Error != "undefined") {
        throw payment.Error;
      }

      console.log("Payment..........");
      console.log(payment);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error al realiar el pago!",
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
    setActivityPayment(false);
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
