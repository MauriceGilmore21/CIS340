import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  
  const CSULogo = {
    uri: "https://csurams.com/images/scroll_logo.png",
    }
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={CSULogo} style={styles.image}>
        <Text style={styles.text}> CSU Logo </Text>
      </ImageBackground>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
   flex: 1, 
   resizeMode: "cover",
   justifyContent: "center",
  },

  text: {
    backgroundColor: "red",
    fontSize: 40,
    fontWeight: 'bold',
  }
});
