import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'baseline'}}>
      <View style={{height: 50, backgroundColor: 'purple', alignSelf: 'stretch'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'forestgreen'}} />   
      <View style={{width: 50,height: 50, backgroundColor: 'skyblue'}} />
   
   </View>
  );
}

