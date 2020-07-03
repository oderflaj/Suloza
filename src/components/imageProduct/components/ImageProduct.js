import React from "react";
import {View,Image,Text} from "react-native";
import styles from "../styles";
import { FontAwesome5 } from '@expo/vector-icons';

export default ({pathImage,sizeBorder=0,sizeImageProduct=0,borderColorCircle,borderWidth,backgroundColor})=>{
  
  const [loaded,setLoaded] = React.useState(false);

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
  
  const loadinImage = ()=>(<View style={styles.loading}>
    <FontAwesome5 name="glass-cheers" size={24} color="rgba(7, 20, 33, 0.68)" />
  </View>)
  
/**
 * 
 * <Image
            style={[styles.image,
            {
              height:styles.image.height + sizeImageProduct, 
              width:styles.image.width + sizeImageProduct
              }]}
            source={pathImage}
            onLoad={()=>setLoaded(true)}
          />
          {!loaded && <View style={styles.loading}>
                        <FontAwesome5 name="glass-cheers" size={24} color="rgba(7, 20, 33, 0.68)" />
                      </View>}
 */

  return(
      <View style={[styles.imageContent, settingContent]}>
      <Image
            style={[styles.image,
            {
              height:styles.image.height + sizeImageProduct, 
              width:styles.image.width + sizeImageProduct
              }]}
            source={pathImage}
            onLoad={()=>setLoaded(true)}
          />
          {!loaded && <View style={styles.loading}>
                        <FontAwesome5 name="glass-cheers" size={24} color="rgba(7, 20, 33, 0.68)" />
                      </View>}
                      
          
        </View>
  )
}