import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SlideTable } from "./SlideTable";
import { styles } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import Draggable from "../../draggable/components/Draggable";

export const CarouselTable = (props) => {
  const { items, cart } = props;

  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const [withFrame, setWithFrame] = useState(0);
  const [heightFrame, setHeightFrame] = useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        //console.log("offset < (width / intervals) * i")
        //console.log(`${offset} < (${width} / ${intervals}) * ${i}`)
        //console.log(`->${offset} < ${(width / intervals) * i}`)
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.3,
        }}
      >
        &bull;
      </Text>
    );
  }
  /**
   * Se crea REF para que se pueda manipular el Scrollview
   */
  const refTable = React.useRef(null);

  /**
   * Se agrega movimiento al carrusel por los botones inferiores para que
   * no se afecten por el drag de las copas
   */
  const moveSlide = (direction) => {
    if (direction === "LEFT") {
      refTable.current.scrollTo({
        x: (width / intervals) * (interval == 1 ? interval - 1 : interval - 2),
        y: 0,
        animated: true,
      });
    } else if (direction === "RIGHT") {
      refTable.current.scrollTo({
        x: (width / intervals) * interval,
        y: 0,
        animated: true,
      });
    }
  };

  /*
    <Draggable widthFrame={withFrame} heightFrame={heightFrame} />
    <Draggable widthFrame={withFrame} heightFrame={heightFrame} />
   */

  return (
    <View>
      <View style={styles.container}>
        <View
          style={styles.overContainer}
          onLayout={(event) => {
            setWithFrame(event.nativeEvent.layout.width);
            setHeightFrame(event.nativeEvent.layout.height);
          }}
        >
          {cart.map((drag) => (
            <Draggable
              key={drag.id}
              widthFrame={withFrame}
              heightFrame={heightFrame}
              imagePath={drag.imageToTable}
            />
          ))}
        </View>
        <ScrollView
          ref={refTable}
          horizontal={true}
          contentContainerStyle={{
            ...styles.scrollView,
            width: `${100 * intervals}%`,
          }}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={(w, h) => init(w)}
          onScroll={(data) => {
            setWidth(data.nativeEvent.contentSize.width);
            setInterval(getInterval(data.nativeEvent.contentOffset.x));
          }}
          scrollEventThrottle={200}
          pagingEnabled
          decelerationRate="fast"
        >
          {items.map((item, index) => {
            return <SlideTable key={index} imagePath={item.image} />;
          })}
        </ScrollView>
        <View style={styles.bullets}>{bullets}</View>
      </View>
      <View style={styles.contentButtons}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => moveSlide("LEFT")}>
            <View style={styles.arrowTouch}>
              <Ionicons
                name="md-arrow-dropleft"
                size={75}
                color={
                  interval == 1
                    ? "rgba(146, 185, 185, 0.57)"
                    : "rgb(48, 119, 119)"
                }
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => moveSlide("RIGHT")}>
            <View style={styles.arrowTouch}>
              <Ionicons
                name="md-arrow-dropright"
                size={75}
                color={
                  interval == intervals
                    ? "rgba(146, 185, 185, 0.57)"
                    : "rgb(48, 119, 119)"
                }
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarouselTable;
