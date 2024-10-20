import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import  {  styles } from './style' ;
 


const index = () => {
  return (
    <View style = {styles.container}>
      <Text style ={styles.text}>Hello world</Text>
     
      <Text style ={styles.text}>This is first react native code...</Text>
     
      <Text style ={styles.text}>Let's try somethinge</Text>
     
    </View>
  )
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f4f8',
//   },
//   text: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: '#3498db',
//   },
// });



export default index