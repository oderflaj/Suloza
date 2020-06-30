import React,{useState, useEffect} from "react";
import {View,Text,TextInput, StyleSheet} from "react-native";



export default ({guesses,actions})=>{
  const [guessCount,setGuessCount] = useState("0");
  const [initialValue,setInitialValue] = useState(true);

  //console.log(guesses)
  //console.log(actions)
  
  useEffect(()=>{
    if(guessCount==0 && initialValue){
      console.log("Pone a fuerza")
      setGuessCount(guesses);
      setInitialValue(false);
    }
    
  });


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
    //action.setGuessCount(result[0]|"0")
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
          //onBlur={()=>console.log("refGuess")}
          onEndEditing={ () => actions.setGuess(guessCount) }
        />
    </View>
  )
}

const styles= StyleSheet.create({
  guessTextInput:{
    borderWidth:1,
    borderRadius:3,
    borderColor:"#5B6564",
    width:60,
    height:35,
    textAlign:"center",
    fontSize:20,
  },
  guessText:{
    fontSize:20,
    marginTop:"auto",
    marginBottom:"auto",
  },
  container:{
    position:"relative",
    flexDirection:"row",
    padding:5,
  }

})