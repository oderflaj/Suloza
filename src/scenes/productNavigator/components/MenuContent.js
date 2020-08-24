import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  StatusBar,
  Platform,
  NativeModules,
} from "react-native";
import Guess from "../../../stores/ShoppingCartContainers/Guess";
//import User from "../../../components/user/components/User";
import User from "../../../stores/ProductNavigationContainers/UserContainer";
import ProductContainer from "../../../stores/ProductNavigationContainers/ProductContainer";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import { stylesContent } from "../style";

export default ({ turnOnOff, actions }) => {
  const { StatusBarManager } = NativeModules;
  const [statusBarHeight, setStatusBarHeight] = React.useState(
    StatusBar.currentHeight | 0
  );
  React.useEffect(() => {
    //statusBarHeight
    //StatusBar.currentHeight
    //await LocalStorage.InitializeSuloza();
    //SaveSession();

    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((response) =>
        setStatusBarHeight(response.height)
      );
    } else {
      setStatusBarHeight(0);
    }
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={turnOnOff}
      onRequestClose={() => actions.toggleProductMenu()}
    >
      <View style={[globalStyle.statusBar, { height: statusBarHeight }]}></View>
      <View style={stylesContent.content}>
        <View style={stylesContent.closeMenuContent}>
          <TouchableWithoutFeedback onPress={actions.toggleProductMenu}>
            <View>
              <Ionicons
                name="ios-arrow-dropdown"
                size={33}
                color={globalStyle.globalFontColor}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={stylesContent.centeredView}>
          <View style={stylesContent.userView}>
            <User />
          </View>
          <View style={stylesContent.guessView}>
            <Guess />
          </View>
          <View style={stylesContent.productContainerView}>
            <ProductContainer />
          </View>
        </View>
      </View>
    </Modal>
  );
};
