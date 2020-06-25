import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ImageProduct from '../../../components/imageProduct/components/ImageProduct'; 

/*
<View style={styles.imageContent}>
          <Image
            style={styles.image}
            source={require('../../../assets/cup1.png')}
          />
        </View>
 */

export default ({ turnOnOff, actions }) => {
  const pathImage = '';

  
  return (
    <View>
      <TouchableOpacity onPress={actions.toggleProductMenu}> 
        <ImageProduct pathImage={require('../../../../assets/cup1.png')}/>
      </TouchableOpacity>
      <Text style={styles.guessLabel}>Invitados <Text style={styles.guessCount}>0</Text></Text>
    </View>
  );
};

const styles = new StyleSheet.create({


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  guessLabel:{
    fontWeight:"bold"
  },
  guessCount:{
    fontWeight:"bold",
    fontSize:15

  }
});
