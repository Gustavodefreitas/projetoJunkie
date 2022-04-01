import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import logoImage from './assets/junkie.png';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={logoImage}/>
      <StatusBar style="auto" />
      <View style={styles.TittleText}> Junkie Lab co.</View>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height:400,
    width: 400
  },
  TittleText:{

    fontSize : 40,
    fontWeight:'bold',
    //marginBottom:200
  }
});
