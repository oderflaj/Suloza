import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {styles} from "../style";
import ImageProduct from '../../../components/imageProduct/components/ImageProduct'; 
import {imagesMenu} from "../../../services/Images";

export default ({ turnOnOff, actions }) => {
  const pathImage = '';

  
  return (
    <View>
      <TouchableOpacity onPress={actions.toggleProductMenu}> 
        <ImageProduct pathImage={imagesMenu.cup1} backgroundColor={"rgb(197, 230, 230)"}/>
      </TouchableOpacity>
      <Text style={styles.guessLabel}>Invitados <Text style={styles.guessCount}>0</Text></Text>
    </View>
  );
};

