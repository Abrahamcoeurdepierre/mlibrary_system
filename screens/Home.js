import { View, Text , Button} from 'react-native'
import React ,{useState, useEffect} from 'react'
import { db } from '../Firebase';


const Home = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
  db.collection('Users').get().then(snapshot => {
      setUsers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    });
  }
  useEffect(() => {
  getUsers();
  }, []);

  console.log(users)

  const seeBooksHandler = () => {
    props.navigation.navigate("Books")
   
  }
  const borrowHandler = () => {
    props.navigation.navigate("BorrowBooks")
  }
  const returnHandler = () => {
    props.navigation.navigate("ReturnBooks")
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title='Books' onPress={seeBooksHandler}/>
      <Button title='Return Book' onPress={returnHandler}/>
      <Button title='Borrow Book' onPress={borrowHandler}/>
    </View>
  )
}

export default Home