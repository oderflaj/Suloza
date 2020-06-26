import React from "react";
import {View,Image} from "react-native";
import styles from "../styles";

export default ({pathImage,sizeImageProduct=0,borderColorCircle,borderWidth,backgroundColor})=>{
  
  let settingContent = {
    borderWidth:borderWidth|styles.imageContent.borderWidth,
    backgroundColor: backgroundColor|styles.imageContent.backgroundColor ,
    borderColor:borderColorCircle,
    height:styles.imageContent.height + sizeImageProduct, 
    width:styles.imageContent.width + sizeImageProduct
    };
  
  return(
      <View style={[styles.imageContent, settingContent]}>

          <Image
            style={[styles.image,
            {
              height:styles.image.height + sizeImageProduct, 
              width:styles.image.width + sizeImageProduct
              }]}
            source={pathImage} 
          />
        </View>
  )
}