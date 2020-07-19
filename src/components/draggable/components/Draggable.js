import React, { useRef, useMemo, useState, useEffect } from "react";
import { Animated, View, PanResponder, Image } from "react-native";
import { styles } from "../style";
import { imageProductToTable, imageTable } from "../../../services/Images";

export default ({
  widthFrame,
  heightFrame,
  imagePath,
  widthImage = 120,
  heightImage = 120,
}) => {
  const [WidthFrame, setWidthFrame] = useState(widthFrame);
  const [HeightFrame, setHeightFrame] = useState(heightFrame);
  const [InitialFlag, setInitialFlag] = useState(true);

  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    setHeightFrame(heightFrame);
    setWidthFrame(widthFrame);
    if (InitialFlag) {
      Animated.spring(pan, { toValue: { x: 120, y: 120 } }).start();
      setInitialFlag(false);
    }
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
        onPanResponderStart: () => {},
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: () => {
          pan.flattenOffset();
          if (
            pan.y._value < 0 ||
            pan.y._value > HeightFrame - 80 ||
            pan.x._value < 0 ||
            pan.x._value > WidthFrame - 100
          ) {
            Animated.spring(pan, { toValue: { x: 20, y: 20 } }).start();
          }
        },
      }),
    [pan, WidthFrame, HeightFrame]
  );

  return (
    <Animated.Image
      style={{
        width: widthImage,
        height: heightImage,
        position: "absolute",
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
      }}
      {...panResponder.panHandlers}
      source={imagePath}
    ></Animated.Image>
  );
};
