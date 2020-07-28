import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles";

export default ({ guesses, turnOnOff, actions }) => {
  const [guessCount, setGuessCount] = useState("0");
  const [initialValue, setInitialValue] = useState(true);

  useEffect(() => {
    if (guessCount == 0 && initialValue) {
      setGuessCount(guesses);
      setInitialValue(false);
    }
  });

  const setFormat = (textValue) => {
    if (textValue[0] == 0 && textValue.length > 1) {
      textValue = textValue.substring(1);
    }

    if (textValue.length < 1) {
      setGuessCount("0");
      return 0;
    }
    let patt1 = /[0-9]+/g;
    let result = textValue.match(patt1);
    return result[0];
  };
  const onChangeText = (textValue) => {
    setGuessCount(setFormat(textValue));
    //action.setGuessCount(result[0]|"0")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.guessText}>Asistentes&nbsp;&nbsp;</Text>
      <TextInput
        style={styles.guessTextInput}
        keyboardType={"number-pad"}
        onChangeText={(text) => {
          onChangeText(text);
          actions.setGuess(setFormat(text));
        }}
        maxLength={3}
        defaultValue={"0"}
        value={guessCount}
        onEndEditing={() => actions.setGuess(guessCount)}
      />
    </View>
  );
};
