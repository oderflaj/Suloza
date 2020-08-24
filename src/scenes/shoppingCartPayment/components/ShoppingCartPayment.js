import React from "react";
import { View, Text } from "react-native";
import Openpay, { createDeviceSessionId } from "openpay-react-native";

export default () => {
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

  return (
    <View>
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
    </View>
  );
};
