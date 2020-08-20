import React from "react";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
  Platform,
  NativeModules,
} from "react-native";
import { styleShoppingCart } from "./style";
import ShoppingCartHeader from "./components/ShoppingCartHeader";
import ShoppingCartBody from "../../stores/ShoppingCartContainers/ShoppingCartBody";
import { globalStyle } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
//<Ionicons name="ios-close-circle-outline" size={24} color="black" />
export default ({ turnOnOffShoppingCart, actions }) => {
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
      transparent={false}
      visible={turnOnOffShoppingCart}
    >
      <View style={[globalStyle.statusBar, { height: statusBarHeight }]}></View>
      <View style={styleShoppingCart.content}>
        <View style={styleShoppingCart.closeButton}>
          <TouchableWithoutFeedback
            onPress={() => actions.turnOnOffShoppingCart()}
          >
            <View>
              <Ionicons
                name="ios-close-circle-outline"
                size={34}
                color={globalStyle.globalFontColor}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ShoppingCartHeader />
        <ShoppingCartBody />
      </View>
    </Modal>
  );
};
