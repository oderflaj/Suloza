import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";

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
    console.log(textValue);

    if (textValue < 0) {
      textValue = 0;
    }

    if (textValue[0] == 0 && textValue.length > 1) {
      textValue = textValue.substring(1);
    }

    if (textValue.length < 1) {
      setGuessCount("0");
      return 0;
    }
    if (typeof textValue == "number") {
      textValue = textValue.toString();
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
      <View style={styles.buttonGuess}>
        <TouchableOpacity
          onPress={() => {
            setGuessCount(setFormat((parseInt(guessCount) + 1).toString()));
            actions.setGuess(setFormat((parseInt(guessCount) + 1).toString()));
          }}
        >
          <View>
            <FontAwesome5
              name="plus-circle"
              size={20}
              color={globalStyle.globalFontColor}
            />
          </View>
        </TouchableOpacity>
      </View>
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
      <View style={styles.buttonGuess}>
        <TouchableOpacity
          onPress={() => {
            setGuessCount(setFormat((parseInt(guessCount) - 1).toString()));
            actions.setGuess(setFormat((parseInt(guessCount) - 1).toString()));
          }}
        >
          <View>
            <FontAwesome5
              name="minus-circle"
              size={20}
              color={globalStyle.globalFontColor}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
