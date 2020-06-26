import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
} from 'react-native';
import Guess from "../../../components/guess/components/Guess";
import User from "../../../components/user/components/User";
//import ProductContainer from "../../../components/productContainer/components/ProductContainer";
import ProductContainer from "../../../stores/containers/ProductContainer";
import { Ionicons } from '@expo/vector-icons';
import {stylesContent} from "../style";

export default ({ turnOnOff, actions }) => {
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={turnOnOff}
      > 
      <View style={stylesContent.content}>
        <View style={stylesContent.closeMenuContent}>
        <TouchableWithoutFeedback onPress={actions.toggleProductMenu}>
          <Ionicons name="ios-arrow-dropdown" size={33} color="black" />
        </TouchableWithoutFeedback>
          
        </View>
        <View style={stylesContent.centeredView}>
          <View style={stylesContent.userView}>
            <User/>
          </View>
          <View style={stylesContent.guessView}>
            <Guess/>
          </View>
          <View style={stylesContent.productContainerView}>
            <ProductContainer/>
          </View>
          
        </View>
      </View>
      
    </Modal>
  );
};

