import React, {useState, useEffect} from "react";
import {View,Text,TouchableOpacity} from "react-native";
import ImageProduct from "../../imageProduct/components/ImageProduct";
import {imagesMenu} from "../../../services/Images";
import {nameItemMenu,productCatalog} from "../../../services/Data";
import {styles} from "../style";

export default ({category,actions})=>{

  console.log(productCatalog[4].category);

  function setProductCategory(categorySelected){
    //console.log(categorySelected)
    let categoryOne=productCatalog.filter(product=>product.category===categorySelected)[0];
    //console.log(category);
    actions.setProductCategory(categoryOne);
    actions.toggleProductMenu();

  }

  return(
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>setProductCategory(productCatalog[4].category)}>
          <View style={styles.containerProduct}>  
            <ImageProduct pathImage={imagesMenu.glass1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.glass1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setProductCategory(productCatalog[1].category)}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cup1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cup1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>setProductCategory(productCatalog[2].category)}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cupCoffee1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cupCoffee1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setProductCategory(productCatalog[3].category)}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cutlery1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cutlery1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>setProductCategory(productCatalog[0].category)}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.dish1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.dish1}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}