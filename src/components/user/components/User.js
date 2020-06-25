import React from "react";
import {View,Text,TouchableOpacity, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons'; 



export default ()=>{
  return(
    <View style={styles.conent}>
      <Entypo name="user" size={45} color="black" />
      <Text style={styles.nameUser}>PERLA AGREDANO FLORES</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conent:{
    alignItems:"center",
    justifyContent:"space-around",
    paddingTop:10

  },
  nameUser:{
    fontSize:18,
    padding:10
  },
});
