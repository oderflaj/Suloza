import React, {useState, useEffect} from "react";
import {View,Text,TouchableOpacity} from "react-native";
import ImageProduct from "../../imageProduct/components/ImageProduct";
import {imagesMenu} from "../../../services/Images";
import {nameItemMenu} from "../../../services/Data";
import {styles} from "../style";

export default ()=>{

  return(
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>console.log("Presionooooooooo")}>
          <View style={styles.containerProduct}>  
            <ImageProduct pathImage={imagesMenu.glass1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.glass1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>console.log("Presionooooooooo")}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cup1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cup1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>console.log("Presionooooooooo")}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cupCoffee1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cupCoffee1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>console.log("Presionooooooooo")}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.cutlery1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.cutlery1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={()=>console.log("Presionooooooooo")}>
          <View style={styles.containerProduct}>
            <ImageProduct pathImage={imagesMenu.dish1} sizeImageProduct={30} borderColorCircle={"brown"} borderWidth={2}/>
            <Text style={styles.nameText}>{nameItemMenu.dish1}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}