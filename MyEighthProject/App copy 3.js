import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={{uri: 'C:\Users\nodejs\CIS340\MyEighthProject\assets\icon.png'}}
            style={styles.logo}/>

            <Text style={styles.inst}>
              Press the button  below to select an image on your phone!
            </Text>
      
      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')}>

      <Text style={styles.buttonText}> Pick Image </Text>
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFA07A"
  },

  button: {
   
    backgroundColor: "#00FFFF",
    padding: 20,
    borderRadius: 5
  },

  inst: {
    fontSize: 18,
    color: "#778899",
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

buttonText: {
  fontSize: 20,
  color: '#fff'
}

});
