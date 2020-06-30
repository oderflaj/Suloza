import React from 'react';
import { View, Image } from 'react-native';
import {stylesSlide} from "../styles";


export const SlideTable = ({imagePath})=>{
    return(
        <View style={stylesSlide.slide}>
            <Image style={stylesSlide.imageTable}
                source={imagePath}
            />
        </View>
    )
}