import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from "../style";
import ImageProduct from '../../../components/imageProduct/components/ImageProduct'; 


export default ({ category, actions }) => {

  const [produtSelected,setProductSelect] = React.useState("");
    //console.log(category)
    React.useEffect(()=>{
        if(produtSelected!=category.category){
            setProductSelect(category.category);
        }
        console.log(produtSelected)
    })
  return (
    <View>
      <TouchableOpacity onPress={actions.toggleProductMenu}> 
        <ImageProduct pathImage={category.products[0].image} backgroundColor={"rgb(197, 230, 230)"}/>
      </TouchableOpacity>
      <Text style={styles.guessLabel}>Invitados <Text style={styles.guessCount}>0</Text></Text>
    </View>
  );
};

