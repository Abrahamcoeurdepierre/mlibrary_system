import { View, Text,StyleSheet,TextInput,Pressable, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React ,{useState, useEffect} from 'react'
import { db } from '../Firebase';
import LottieView from "lottie-react-native";


const BorrowBooks = () => {
  const [input, setInput] = useState("");
  const [errorToggle, setErrorToggle] = useState(false);
  const [addedToggle, setAddedToggle] = useState(false);
  const toggleFalse = () => {
    setErrorToggle(false);
    setAddedToggle(false);
  }
  const borrowAction = () => {
    console.log(input);
    setAddedToggle(true);
  }
  return (
    <View style={{flex:1,width:"100%"  }}>
      <Modal 
        animationType="fade"   
        transparent={true}
        visible={errorToggle}
        onRequestClose={() => {
          
        }}>
          <Pressable style = {styles.modalBackground}
                     onPress={toggleFalse}>

              <View style= {styles.popup}>
                  <LottieView
                      style ={styles.errors}
                      source= {require("../assets/Error.json")}
                      autoPlay={true}
                      loop={true}
                    />
                    <Text>An error occured</Text>
              </View>
          </Pressable>
        
        </Modal>

        <Modal 
        animationType="fade"   
        transparent={true}
        visible={addedToggle}
        onRequestClose={() => {
          
        }}>
          <Pressable style = {styles.modalBackground}
                     onPress={toggleFalse}>

              <View style= {styles.popup}>
                  <LottieView
                      style ={{ width:200 }}
                      source= {require("../assets/Added.json")}
                      autoPlay={true}
                      loop={true}
                    />
              </View>
          </Pressable>
        
        </Modal>
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
            value={input}
            onChangeText={(e) => setInput(e)}
          />
          <Pressable 
            style={styles.btnStyle}
            onPress={borrowAction}
          >
            <Text style={{ color:"white" }}>BORROW</Text>
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
  errors:{
    height:100,
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
  popup:{
    marginTop:20,
    marginBottom:20,
    width:200,
    height:200,
    borderRadius:10,
    backgroundColor:"white",
    justifyContent:"space-evenly",
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
    backgroundColor: '#00255B',
  },
  modalBackground:{
    flex:1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent:"center",
    alignItems:"center"
  }
});

export default BorrowBooks