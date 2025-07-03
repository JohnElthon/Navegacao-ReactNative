import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
          headerBackVisible: false, // remove setas de navegação         
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Página Inicial',
              
            headerBackVisible: false,
           }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre a Empresa',
            headerBackVisible: false,
           }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: 'Fale Conosco',
            headerBackVisible: false,
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
