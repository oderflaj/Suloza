import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet, StatusBar,Image,Modal,NativeModules, StatusBarIOS, Platform} from "react-native";
import {styles} from "./../styles";
import ShoppingCartButton from "./shoppingCart/components/ShoppingCartButton";
import MenuContent from "../stores/containers/MenuContent";
import MenuButton from "../stores/containers/MenuButton"; 
//import MainContent from "../scenes/mainContent/components/MainContent";
import MainContent from "../stores/containers/MainContent";
import { createStore } from 'redux'
import {Provider} from "react-redux";
import combine from "../stores/ConfigureStore";


const Layout = () => { 
const { StatusBarManager } = NativeModules;
const [statusBarHeight,setStatusBarHeight]=useState(StatusBar.currentHeight|39);

useEffect(()=>{ 
  
  //statusBarHeight 
  //StatusBar.currentHeight
  if (Platform.OS === 'ios') {
    StatusBarManager.getHeight(response =>setStatusBarHeight(response.height))
  }
  
})

return (
  <View style={styles.layoutContent} >
    <MenuContent/>     
    <View style={[styles.statusBar,{height:statusBarHeight+3}]}></View>
    <View style={styles.headerContent}>
      <View style={styles.headerLeft}><MenuButton/></View>
      <View style={styles.headerCenter}><Text style={styles.headerCenterFont}>Suloza</Text></View>
      <View style={styles.headerRight}><ShoppingCartButton/></View>
    </View>
    <View style={styles.mainContent}>
      <MainContent/>
    </View>
  </View>
  )

}; 

export default () => {
    let store = createStore(combine);

    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
      )
}

