import React,{useState} from "react";
import {View,Text,TextInput, StyleSheet} from "react-native";



export default ()=>{
  const [guessCount,setGuessCount] = useState("0");

  const onChangeText = (textValue)=>{
    if(textValue[0]==0 && textValue.length>1){
      textValue = textValue.substring(1);
    }

    if(textValue.length<1){
      setGuessCount("0")
      return
    }
    let patt1 =/[0-9]+/g;
    let result = textValue.match(patt1);
    
    setGuessCount(result[0])
  }
  return(
    <View style={styles.container}>
      <Text style={styles.guessText}>Invitados&nbsp;&nbsp;</Text> 
       <TextInput style={styles.guessTextInput}
          keyboardType={"number-pad"}
          onChangeText={text => onChangeText(text)}
          maxLength={3}
          defaultValue={"0"}
          value={guessCount}
        />
    </View>
  )
}

const styles= StyleSheet.create({
  guessTextInput:{
    borderWidth:1,
    borderRadius:3,
    borderColor:"#5B6564",
    width:40,
    height:25,
    textAlign:"center",
    fontSize:17,
  },
  guessText:{
    fontSize:18,
  },
  container:{
    position:"relative",
    flexDirection:"row",
    padding:5,
  }

})