import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import Layout from './src/scenes/Layout';
import MenuContent from './src/scenes/productNavigator/components/MenuContent';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  return <Layout style={styles.container}/>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
