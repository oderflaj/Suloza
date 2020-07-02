import React from "react";
import {View,Image,Text} from "react-native";
import styles from "../styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({pathImage,sizeBorder=0,sizeImageProduct=0,borderColorCircle,borderWidth,backgroundColor})=>{
  
  let settingContent = {
    
    backgroundColor: backgroundColor|styles.imageContent.backgroundColor ,
    height:styles.imageContent.height + sizeBorder, 
    width:styles.imageContent.width + sizeBorder
    };
  
    if(borderWidth!=0 && borderWidth!="0"){
      settingContent["borderWidth"] = borderWidth|styles.imageContent.borderWidth;
      settingContent["borderColor"] = borderColorCircle;
    }else{
      delete styles.borderWidth
    }
    
  //const[loading,setLoading]=React.useState(true);

  return(
      <View style={[styles.imageContent, settingContent]}>

          <Image
            style={[styles.image,
            {
              height:styles.image.height + sizeImageProduct, 
              width:styles.image.width + sizeImageProduct
              }]}
            source={pathImage}
            defaultSource={require("../../../../assets/loadingImage.png")}
            /*
            onLoadEnd={()=>{
              console.log("Termina----------xxxx")
              console.log(loading)
              setLoading(!loading)
            }} 
            onLoadStart={()=>{
              console.log("Inicia------->")
              console.log(loading)
              setLoading(!loading)
            }}
            */
          />
        </View>
  )
}