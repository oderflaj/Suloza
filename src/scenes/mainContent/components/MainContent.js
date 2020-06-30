import React from "react";
import {View,Text} from "react-native";
import CarouselProducts from "../../../stores/containers/CarouselProducts";
import CarouselTable from "../../../components/corouselTable/components/CarouselTable";
import {tableCatalog} from "../../../services/Data";



export default ({category})=>{
    console.log(tableCatalog)
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
            
            itemsPerInterval={3}
            items={category.products}
        />
        <CarouselTable
            items={tableCatalog}
        />
        <Text>Confirmation</Text>
    </View>
    )
}