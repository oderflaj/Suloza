import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style";

export default ({
  title,
  onPress,
  backgroundColor,
  children,
  fatherConatinerWidth,
  fontSize,
  fontColor,
  borderWidth,
  paddingVertical,
  paddingHorizontal,
}) => {
  let settingFatherContainer = {
    width: fatherConatinerWidth || styles.fatherContainer.width,
  };
  let settingContent = {
    backgroundColor: backgroundColor || styles.container.backgroundColor,
    borderWidth: borderWidth || styles.container.borderWidth,
    paddingVertical: paddingVertical || styles.container.paddingVertical,
    paddingHorizontal: paddingHorizontal || styles.container.paddingHorizontal,
  };

  if (typeof borderWidth != "undefined" && typeof fontColor != "undefined") {
    settingContent["borderColor"] = fontColor;
  }

  let settingText = {
    fontSize: fontSize || styles.textButton.fontSize,
    color: fontColor || styles.textButton.color,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[settingFatherContainer]}>
      <View style={[styles.container, settingContent]}>
        <View style={styles.iconContainer}>{children}</View>
        <Text style={[styles.textButton, settingText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
