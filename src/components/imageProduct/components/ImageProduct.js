import React from "react";
import {View,Image} from "react-native";
import styles from "../styles";

export default ({pathImage,sizeImageProduct=0,borderColorCircle,borderWidth,backgroundColor})=>{
  
  let settingContent = {
    
    backgroundColor: backgroundColor|styles.imageContent.backgroundColor ,
    height:styles.imageContent.height + sizeImageProduct, 
    width:styles.imageContent.width + sizeImageProduct
    };
  
    if(borderWidth!=0 && borderWidth!="0"){
      settingContent["borderWidth"] = borderWidth|styles.imageContent.borderWidth;
      settingContent["borderColor"] = borderColorCircle;
    }else{
      delete styles.borderWidth
    }
  
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