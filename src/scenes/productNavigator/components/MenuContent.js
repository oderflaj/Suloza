import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  StatusBar,
  Platform,
  NativeModules,
  ActivityIndicator,
} from "react-native";
import Guess from "../../../stores/ShoppingCartContainers/Guess";
//import User from "../../../components/user/components/User";
import User from "../../../stores/ProductNavigationContainers/UserContainer";
import ProductContainer from "../../../stores/ProductNavigationContainers/ProductContainer";
import { Ionicons } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";
import { stylesContent } from "../style";
import Button from "../../../components/button/componets/Button";
//import styles from "../../../components/imageProduct/styles";
import { DeactivateUser } from "../Services";
import { store } from "../../../stores/GlobalContainer/Global";
import UserInformation from "../../userInformation/components/UserInformation";

export default ({ turnOnOff, actions }) => {
  const { StatusBarManager } = NativeModules;
  const [statusBarHeight, setStatusBarHeight] = useState(
    StatusBar.currentHeight | 0
  );

  const [deactivateIndicator, setDeactivateIndicator] = useState(false);
  const [userInformationLocal, setUserInformationLocal] = useState({});
  const [openUserInformationModal, setOpenUserInformationModal] = useState(
    false
  );

  useEffect(() => {
    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((response) =>
        setStatusBarHeight(response.height)
      );
    } else {
      setStatusBarHeight(0);
    }

    setUserInformationLocal(
      store.getState().reducerShoppingCart.userInformation
    );
  }, []);
  const closeUserInformation = () => {
    setUserInformationLocal(
      store.getState().reducerShoppingCart.userInformation
    );
    setOpenUserInformationModal(false);
  };
  const DeactivateUserMenu = async () => {
    setUserInformationLocal(
      store.getState().reducerShoppingCart.userInformation
    );

    setDeactivateIndicator(false);

    let result = await DeactivateUser();
    setUserInformationLocal(
      store.getState().reducerShoppingCart.userInformation
    );
    alert(result.message);
    //console.log("Se ha desactivado el usuario");
    //console.log(result);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={turnOnOff}
      onRequestClose={() => actions.toggleProductMenu()}
    >
      <View style={[globalStyle.statusBar, { height: statusBarHeight }]}></View>
      <View style={stylesContent.content}>
        {openUserInformationModal && (
          <UserInformation closeUserInformation={closeUserInformation} />
        )}
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
        {Object.keys(userInformationLocal).length === 0 ? (
          <View style={stylesContent.containerButton}>
            {deactivateIndicator ? (
              <ActivityIndicator
                color={globalStyle.globalFontColor}
                size={"small"}
              />
            ) : (
              <Button
                fatherConatinerWidth={"100%"}
                title={"Registrarse"}
                fontSize={15}
                backgroundColor={globalStyle.globalBackgroundColor}
                fontColor={globalStyle.globalFontColor}
                borderWidth={2}
                paddingVertical={5}
                onPress={() => setOpenUserInformationModal(true)}
              />
            )}
          </View>
        ) : (
          <View style={stylesContent.containerButton}>
            {deactivateIndicator ? (
              <ActivityIndicator
                color={globalStyle.globalFontColor}
                size={"small"}
              />
            ) : (
              <Button
                fatherConatinerWidth={"100%"}
                title={"Desvincular Cuenta"}
                fontSize={15}
                backgroundColor={globalStyle.globalBackgroundColor}
                fontColor={globalStyle.globalFontColor}
                borderWidth={2}
                paddingVertical={5}
                onPress={() => DeactivateUserMenu()}
              />
            )}
          </View>
        )}
      </View>
    </Modal>
  );
};
