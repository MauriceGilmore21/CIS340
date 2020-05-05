import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just Yellow Text</Text>
      <Text style={styles.largegreen}> This is Big Green </Text>
      <Text style={[styles.yellow, styles.largegreen]}>Yellow Text, then Big Green Text </Text>
      <Text style={[styles.largegreen, styles.yellow, ]}>Big Green Text, then Yellow Text </Text>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 60, 
},

largegreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 30,
},

yellow: {
  color: 'yellow',
  fontSize: 20,
}
});