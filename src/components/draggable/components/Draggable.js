import React, { useRef, useMemo, useState, useEffect } from "react";
import { Animated, View, PanResponder, Image } from "react-native";
import { styles } from "../style";
import { imageProductToTable, imageTable } from "../../../services/Images";

export default ({ widthFrame, heightFrame, imagePath }) => {
  const [WidthFrame, setWidthFrame] = useState(widthFrame);
  const [HeightFrame, setHeightFrame] = useState(heightFrame);

  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    setHeightFrame(heightFrame);
    setWidthFrame(widthFrame);
  });

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value,
          });
        },
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: () => {
          pan.flattenOffset();
          if (
            pan.y._value < 0 ||
            pan.y._value > HeightFrame - 100 ||
            pan.x._value < -40 ||
            pan.x._value > WidthFrame - 80
          ) {
            Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
          }
        },
      }),
    [pan, WidthFrame, HeightFrame]
  );

  return (
    <Animated.Image
      style={{
        width: 120,
        height: 120,
        position: "absolute",
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
      source={imagePath}
    ></Animated.Image>
  );
};
