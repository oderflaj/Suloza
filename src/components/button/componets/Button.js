import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style";

export default ({ title, onPress, backgroundColor, children }) => {
  let settingContent = {
    backgroundColor: backgroundColor || styles.container.backgroundColor,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.fatherContainer}>
      <View style={[styles.container, settingContent]}>
        <View style={styles.iconContainer}>{children}</View>
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
