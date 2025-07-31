import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Home from '../pages/Home';
import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import CustomDrawer from '../componentes/CustomDrawer';

 
export default function Routes() {
    const Drawer = createDrawerNavigator();
    return (
 
        <Drawer.Navigator

        drawerContent={CustomDrawer}

        screenOptions={{
          //headerShown:false,
          drawerItemStyle:{
            marginBottom:20
            

          },
          drawerStyle:{
            backgroundColor:'#fff',     
                
          },
          drawerLabelStyle:{
            color: 'red'

          },
          
          drawerActiveBackgroundColor: '#3b3dbf',
          drawerInactiveTintColor: '#fff',

          drawerInactiveBackgroundColor: '#ccc',
          drawerInactiveTintColor: '#000',

        }}
      
        >
          
            <Drawer.Screen
                name='Home' component={StackRoutes}
                options={{
                  title:'Início'
                }}
            />
            <Drawer.Screen
                name='Sobre' component={Sobre}
            />
 
            <Drawer.Screen
                name='Contato' component={Contato}
            />
 
          
        </Drawer.Navigator>
 
    );
}

