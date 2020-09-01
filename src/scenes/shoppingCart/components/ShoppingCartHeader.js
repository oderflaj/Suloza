import React from "react";
import { View, Text, TextInput } from "react-native";
import { styleShoppingCartHeader } from "../style";
import { Feather } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import Guess from "../../../stores/ShoppingCartContainers/Guess";
import { userInformation } from "../../../services/Data";

export default ({ userInformation }) => {
  //console.log(userInformation);
  return (
    <View style={styleShoppingCartHeader.content}>
      <View style={styleShoppingCartHeader.userImage}>
        <Feather name="user" size={44} color={globalStyle.globalFontColor} />
      </View>
      <View style={styleShoppingCartHeader.infoBase}>
        <Text style={styleShoppingCartHeader.infoBaseText}>
          {Object.keys(userInformation).length == 0
            ? "Invitado"
            : userInformation.name}
        </Text>
        <View style={styleShoppingCartHeader.asistantsContainer}>
          <Guess />
        </View>
      </View>
    </View>
  );
};
