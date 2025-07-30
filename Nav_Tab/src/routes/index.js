import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@react-native-vector-icons/feather';
 
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import stackRoutes from './stackRoutes'
 
export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (

   
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard:true,
      tabBarShowLabel:false,
      tabBarActiveTintColor: '#fff',
      tabBarStyle:{
        backgroundColor: '#000',
        borderTopWidth:0
      }
    }}>
      <Tab.Screen name = 'stackRoutes' component={stackRoutes} options={{
        tabBarLabel:'Início',
        tabBarIcon:({color,size})=><Feather name="home" size={20} color={color} />}}/>
      <Tab.Screen name = 'Sobre' component={Sobre} options={{tabBarIcon:({color,size})=><Feather name="info" size={20} color={color} />}}/>
      <Tab.Screen name = 'Contato' component ={Contato} options={{tabBarIcon:({color,size})=><Feather name="phone" size={20} color={color} />}}/>
 
    </Tab.Navigator>
 
   
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});