import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import {styles} from "../style";

export default ({title, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}