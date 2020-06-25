import React from "react";
import {View,Image} from "react-native";
import styles from "../styles";

export default ({pathImage})=>{
  let image=require('../../../../assets/dish1.png')
  
  
  return(
      <View style={styles.imageContent}>

          <Image
            style={styles.image}
            source={pathImage} 
          />
        </View>
  )
}