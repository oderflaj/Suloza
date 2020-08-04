import React from "react";
import { View, Text, TextInput } from "react-native";
import { styleShoppingCartHeader } from "../style";
import { Feather } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import Guess from "../../../stores/ShoppingCartContainers/Guess";

export default () => {
  return (
    <View style={styleShoppingCartHeader.content}>
      <View style={styleShoppingCartHeader.userImage}>
        <Feather name="user" size={44} color={globalStyle.globalFontColor} />
      </View>
      <View style={styleShoppingCartHeader.infoBase}>
        <Text style={styleShoppingCartHeader.infoBaseText}>
          Jose Manuel Alcantara Ibarra de la Loza
        </Text>
        <View style={styleShoppingCartHeader.asistantsContainer}>
          {/*<Text
            style={[
              styleShoppingCartHeader.infoBaseText,
              styleShoppingCartHeader.asistantsText,
            ]}
          >
            Asistentes
          </Text>
          <TextInput />*/}
          <Guess />
        </View>
      </View>
    </View>
  );
};
