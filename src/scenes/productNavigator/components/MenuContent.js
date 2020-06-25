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
import ProductContainer from "../../../components/productContainer/componets/ProductContainer";
import { Ionicons } from '@expo/vector-icons';

export default ({ turnOnOff, actions }) => {
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={turnOnOff}
      
      onRequestClose={() => {console.log("Alert")}}> 
      <View style={styles.content}>
        <View style={styles.closeMenuContent}>
        <TouchableWithoutFeedback onPress={actions.toggleProductMenu}>
          <Ionicons name="ios-arrow-dropdown" size={33} color="black" />
        </TouchableWithoutFeedback>
          
        </View>
        <View style={styles.centeredView}>
          <View style={styles.userView}>
            <User/>
          </View>
          <View style={styles.guessView}>
            <Guess/>
          </View>
          <View style={styles.productContainerView}>
            <ProductContainer/>
          </View>
          
        </View>
      </View>
      
    </Modal>
  );
};
const styles = StyleSheet.create({
  content:{
    position:"relative",
    flexDirection:"column",
    backgroundColor:"#fff",
    height:"100%",
    width:"85%",
    borderRightWidth:1,
    borderTopRightRadius:6
  },
  centeredView:{
    position:"relative",
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:20
  },
  userView:{
    justifyContent:"space-between",
    flexDirection:"row",
  },
  guessView:{
    
  },
  productContainerView:{
    backgroundColor:"yellow"
  },
  closeMenuContent:{
    position:"absolute",
    right:13,
    top:13
  },
});
