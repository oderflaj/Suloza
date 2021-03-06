import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../style";
import { globalStyle } from "../../../styles";

//import { userInformation } from "../../../services/Data";

export default ({ userInformation }) => {
  return (
    <View style={styles.conent}>
      <Feather name="user" size={54} color={globalStyle.globalFontColor} />
      <Text style={styles.nameUser}>
        {Object.keys(userInformation).length == 0
          ? "Invitado"
          : userInformation.name}
      </Text>
    </View>
  );
};
