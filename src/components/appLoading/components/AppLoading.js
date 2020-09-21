import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { stylesAppLoading } from "../styles";
import { FontAwesome5, FontAwesome, Feather } from "@expo/vector-icons";

import { globalStyle } from "../../../styles";

export default () => {
  const [counter, setCounter] = useState(0);
  const [loadingCount1, setLoadingCount1] = useState(
    globalStyle.globalFontColor
  );
  const [loadingCount2, setLoadingCount2] = useState(
    globalStyle.globalFontColor
  );
  const [loadingCount3, setLoadingCount3] = useState(
    globalStyle.globalFontColor
  );
  const [loadingCount4, setLoadingCount4] = useState(
    globalStyle.globalFontColor
  );

  let limit = 0;
  /*
  setTimeout(() => {
    switch (counter) {
      case 0:
        setLoadingCount1(globalStyle.globalFontColor);
        setCounter(counter + 1);
        break;
      case 1:
        setLoadingCount2(globalStyle.globalFontColor);
        setCounter(counter + 1);
        break;
      case 2:
        setLoadingCount3(globalStyle.globalFontColor);
        setCounter(counter + 1);
        break;
      case 3:
        setLoadingCount4(globalStyle.globalFontColor);
        setCounter(counter + 1);
        break;

      default:
        setLoadingCount1(globalStyle.globalFontColorOdd);
        setLoadingCount2(globalStyle.globalFontColorOdd);
        setLoadingCount3(globalStyle.globalFontColorOdd);
        setLoadingCount4(globalStyle.globalFontColorOdd);
        setCounter(0);
    }
    limit++;
    if (limit == 10) {
      return;
    }
  }, 380);
  */

  useEffect(() => {}, [
    counter,
    loadingCount1,
    loadingCount2,
    loadingCount3,
    loadingCount4,
  ]);

  return (
    <View style={stylesAppLoading.content}>
      <Image
        style={stylesAppLoading.title}
        resizeMode={"contain"}
        source={require("../../../../assets/loagingSuloza.png")}
      />
      <View style={stylesAppLoading.loadingTimer}>
        <FontAwesome name="cutlery" size={20} color={loadingCount1} />
        <Feather name="disc" size={20} color={loadingCount2} />
        <FontAwesome5 name="glass-whiskey" size={20} color={loadingCount3} />
        <FontAwesome5
          name="glass-martini-alt"
          size={20}
          color={loadingCount4}
        />
      </View>
    </View>
  );
};
