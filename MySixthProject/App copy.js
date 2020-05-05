import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  
  const CSULogo = {
    uri: "https://csurams.com/images/scroll_logo.png",
    }
  
  
  return (
    <View style={styles.container}>
      
      <Image  
         style={styles.localCSULogo}
         source={require('./assets/logo.jpg')}
      />


      <Image

        style={styles.urlCSULogo}
        source={{
          uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
        }}
      />

       <Image 
       style={styles.stretchLogo}
       source={CSULogo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
   width: 55, 
   height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {
    width: 50,
    height: 200,
    resizeMode: 'center'
  }
});
