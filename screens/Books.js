import { View, Text , FlatList, TouchableOpacity, StyleSheet,ScrollView} from 'react-native'
import React ,{useState, useEffect} from 'react'
import { db } from '../Firebase';


const Books = () => {
  const [borrows, setBorrows] = useState([]);

  const getBorrows = () => {
  db.collection('Borrows').onSnapshot(snapshot => {
      setBorrows(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    });
  }
  useEffect(() => {
  getBorrows();
  }, []);

  console.log(borrows);
  if (borrows.length > 0 ) {
    return (
      <View style={{flex:1,width:"100%"  }}>
        <View  style= {styles.card}>
        <Text style={{ fontSize:20, marginBottom:10 , marginTop:10  }}>Borrowed Books: </Text>
        <FlatList
          data={borrows}
          renderItem={({item}) => (
              <View style= {styles.labels}>
                    <View style= {styles.column}>
                      <Text style={{ marginBottom:10 }}>Book ID:</Text>
                      <Text >{item.BookId}</Text>
                    </View>
                    <View style= {styles.column}>
                      <Text style={{ marginBottom:10 }}>Return Date:</Text>
                      <Text  >{new Date(item.ReturnDate.seconds * 1000).toLocaleDateString("en-US")}</Text>
                    </View>
                </View>
          )}  
        />
        </View>
      </View>
      
    )
  } else {
    return(
      <View> 
        <Text>No render</Text>
      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  labels: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#CED3D6',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width:"90%",
    marginTop:10,
    paddingHorizontal:10,
    paddingVertical:20,
    marginLeft:"5%",
    shadowColor:"#000",
    shadowOffset:{width:5,height: 10},
    elevation:1,
  },
  card:{
    flexDirection:'column',
    width:"100%",
    alignItems:'center',
    height:"85%",
  },
  column:{
    flexDirection:'column',
    width:"40%",
  }
});


export default Books