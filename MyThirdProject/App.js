import React, {useState} from 'react';
import { Text, Button, View} from 'react-native';

function TV(props){
 
const [isOff,setisOff] = useState(true);
return(
<View>
{"\n\n\n\n"}
<Text>
  This is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me On"}
</Text>
<Button
  onPress={() => {
    setisOff(false);
  }}
  disabled={!isOff}
  title={isOff ? "Turn Me On, Please!" : "Thank You!"}
/>
</View>
);

}

export default function MultiTVs(){
  return(
    <View>
     <Text> Welcome to CIS340</Text> 
     <TV name= "LG"/>
     <TV name= "Sony"/>
    </View>
  );
}