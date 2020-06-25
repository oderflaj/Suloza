import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet, StatusBar,Image,Modal,NativeModules, StatusBarIOS, Platform} from "react-native";
import ShoppingCartButton from "./shoppingCart/components/ShoppingCartButton";
import MenuContent from "../stores/containers/MenuContent";
import MenuButton from "../stores/containers/MenuButton"; 
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
      <Text>BODY</Text>
      <Image style={{height:120, width:120}} source={require("../../assets/cup1.png")}/> 
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

const styles = StyleSheet.create({
  statusBar:{
    backgroundColor:"grey",
    
  },
  layoutContent:{
    position:"relative",
    backgroundColor:"#fff",
    height:"100%"

  },
  headerContent:{
    backgroundColor:"#fff",
    height:100,
    flexDirection:"row",
    justifyContent:"space-around",
  },
  headerLeft:{
    justifyContent:"space-around",
    
  },
  headerCenter:{
    justifyContent:"space-around",
    width:"50%",
    
  },
  headerCenterFont:{
    fontSize:22,
    textAlign:"center",
    fontWeight:"bold"
  },
  headerRight:{
    justifyContent:"space-around",
    
  },
  mainContent:{
    backgroundColor:"#fff",
    height:"100%"
  }
})