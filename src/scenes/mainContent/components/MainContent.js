import React from "react";
import {View,Text} from "react-native";
import CarouselProducts from "../../../components/carousel/components/CarouselProducts";


export default ({category})=>{
    
    return(
    <View>
        <CarouselProducts
            style='element'
            itemsPerInterval={3}
            items={category.products}
        />
        <Text>Table</Text>
        <Text>Confirmation</Text>
    </View>
    )
}