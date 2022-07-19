import { View, Text,StyleSheet,TextInput,Pressable   } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react'

const ReturnBooks = () => {
  return (
    <View style={{flex:1,width:"100%"  }}>
      <View  style= {styles.card}>
        <Pressable style= {styles.circle}> 
          <Ionicons name="camera" color="white" size={80} />
        </Pressable>
        <Text style={{ fontSize:20 }}>OR</Text>
        <View style= {styles.viewInput}>
          <Text>Input the Book ID here: </Text>
          <TextInput
            style={styles.input}
            placeholder="Book ID"
            keyboardType="numeric"
          />
          <Pressable style={styles.btnStyle}>
            <Text style={{ color:"white" }}>RETURN</Text>
          </Pressable>
        </View>
        
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  card:{
    flexDirection:'column',
    width:"100%",
    alignItems:'center',
    height:"85%",
    justifyContent:"space-around"
  },
  viewInput:{
    flexDirection:'column',
    width:"100%",
    alignItems:'center',
  },
  circle:{
    marginTop:20,
    marginBottom:20,
    width:150,
    height:150,
    borderRadius:75,
    backgroundColor:"#CED3D6",
    justifyContent:"center",
    alignItems:"center",
  },
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle:{
    width: 300,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E40000',
  },
});
export default ReturnBooks