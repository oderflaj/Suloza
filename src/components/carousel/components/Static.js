import React from 'react'
import { View, Text } from 'react-native'
import { stylesStat } from '../styles'
import ImageProduct from "../../imageProduct/components/ImageProduct";

export const Static = (props) => {

  const { imagePath } = props;

  return (
    <View style={stylesStat.stat}>
      <ImageProduct  
        pathImage={imagePath} 
        backgroundColor={"rgb(197, 230, 230)"} 
        sizeBorder={5}/>
    </View>
  );
}

export default Static;