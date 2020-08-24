import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, NativeModules, Platform } from "react-native";
import { styles } from "./../styles";
import ShoppingCartButton from "../stores/ShoppingCartContainers/ShoppingCartButton";
import MenuContent from "../stores/ProductNavigationContainers/MenuContent";
import MenuButton from "../stores/ProductNavigationContainers/MenuButton";
import ShoppingCart from "../stores/ShoppingCartContainers/ShoppingCart.js";
import MainContent from "../stores/ProductNavigationContainers/MainContent";
import { store, persistor } from "../stores/GlobalContainer/Global";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import AppLoading from "../components/appLoading/components/AppLoading";
import { LocalStorage } from "../services/Function";
import { PersistGate } from "redux-persist/integration/react";

const Layout = () => {
  const { StatusBarManager } = NativeModules;
  const [statusBarHeight, setStatusBarHeight] = useState(
    StatusBar.currentHeight | 0
  );

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [initialDataFlag, setInitialDataFlag] = useState(false);

  useEffect(() => {
    //statusBarHeight
    //StatusBar.currentHeight

    //SaveSession();

    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((response) =>
        setStatusBarHeight(response.height)
      );
    }
    if (!fontsLoaded) {
      loadFonts();
    }
    if (!initialDataFlag) {
      LocalStorage.InitializeSuloza().then((response) =>
        setInitialDataFlag(response)
      );
    }
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "DancingScript-Regular": require("../../assets/fonts/DancingScript/DancingScript-Regular.ttf"),
      "DancingScript-Bold": require("../../assets/fonts/DancingScript/DancingScript-Bold.ttf"),
      "Spartan-Medium": require("../../assets/fonts/Spartan/Spartan-Medium.ttf"),
      "Spartan-Bold": require("../../assets/fonts/Spartan/Spartan-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  if (fontsLoaded && initialDataFlag) {
    //logIn();
    return (
      <View style={styles.layoutContent}>
        <MenuContent />
        <ShoppingCart />
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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
};
