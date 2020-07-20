import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Modal,
  NativeModules,
  StatusBarIOS,
  Platform,
} from "react-native";
import { styles } from "./../styles";
import ShoppingCartButton from "./shoppingCart/components/ShoppingCartButton";
import MenuContent from "../stores/ProductNavigationContainers/MenuContent";
import MenuButton from "../stores/ProductNavigationContainers/MenuButton";
//import MainContent from "../scenes/mainContent/components/MainContent";
import MainContent from "../stores/ProductNavigationContainers/MainContent";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combine from "../stores/ConfigureStore";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const Layout = () => {
  const { StatusBarManager } = NativeModules;
  const [statusBarHeight, setStatusBarHeight] = useState(
    StatusBar.currentHeight | 0
  );

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    //statusBarHeight
    //StatusBar.currentHeight
    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((response) =>
        setStatusBarHeight(response.height)
      );
    }
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "DancingScript-Bold": require("../../assets/fonts/DancingScript/DancingScript-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  if (fontsLoaded) {
    return (
      <View style={styles.layoutContent}>
        <MenuContent />
        <View style={[styles.statusBar, { height: statusBarHeight }]}></View>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <MenuButton />
          </View>
          <View style={styles.headerCenter}>
            <Text style={[styles.headerCenterFont]}>Suloza</Text>
          </View>
          <View style={styles.headerRight}>
            <ShoppingCartButton />
          </View>
        </View>
        <View style={styles.mainContent}>
          <MainContent />
        </View>
      </View>
    );
  } else {
    return <AppLoading />;
  }
};

export default () => {
  let store = createStore(combine);

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
