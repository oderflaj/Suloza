import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style";

export default ({
  title,
  onPress,
  backgroundColor,
  children,
  fatherConatinerWidth,
}) => {
  let settingFatherContainer = {
    width: fatherConatinerWidth || styles.fatherContainer.width,
  };
  let settingContent = {
    backgroundColor: backgroundColor || styles.container.backgroundColor,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[settingFatherContainer]}>
      <View style={[styles.container, settingContent]}>
        <View style={styles.iconContainer}>{children}</View>
        <Text style={styles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
