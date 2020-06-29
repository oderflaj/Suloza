import React from "react";
import {View,Text} from "react-native";
//import CarouselProducts from "../../../components/carousel/components/CarouselProducts";
import CarouselProducts from "../../../stores/containers/CarouselProducts";



export default ({category})=>{
    
    /*
    const [produtSelected,setProductSelect] = React.useState("");
    //console.log(category)
    React.useEffect(()=>{
        if(produtSelected!=category.category){
            setProductSelect(category.category);
        }
        console.log(category)
    });
    */
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