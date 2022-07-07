import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Books from './screens/Books';
import BorrowBooks from './screens/BorrowBooks';
import ReturnBooks from './screens/ReturnBooks';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
export default function App() {

    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{
            backgroundColor:"#102129",
            position:"absolute",
            bottom: 30,
            marginHorizontal:20,
            borderRadius:10,
            height:60,
          }
        }}>
            <Tab.Screen name='Return' component={ReturnBooks}  options={{ 
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name="delete-circle" size={32} color={focused ? "white" : "gray"} />
              ),
              
             }}></Tab.Screen>
        
            <Tab.Screen name='Books' component={Books} options={{ 
              tabBarIcon: ({ focused }) => (
                <Ionicons name="book" color={focused ? "white" : "gray"} size={32} />
              ),
              
             }}></Tab.Screen>
            <Tab.Screen name='Borrow' component={BorrowBooks} 
             options={{ 
              tabBarIcon: ({ focused }) => (
                <Ionicons name="add-circle" color={focused ? "white" : "gray"} size={32} />
              ),
              
             }}></Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
}
