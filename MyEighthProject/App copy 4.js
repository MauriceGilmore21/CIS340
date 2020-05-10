import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'// import


export default function App() {

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){
      alert("Permission is required!");
      return;
    }
    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

  }
  
  //End of code

  return (
    <View style={styles.container}>
      <Image source={{uri: 'C:\Users\nodejs\CIS340\MyEighthProject\assets\icon.png'}}
            style={styles.logo}/>

            <Text style={styles.inst}>
              Press the button  below to select an image on your phone!
            </Text>
      
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>

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
