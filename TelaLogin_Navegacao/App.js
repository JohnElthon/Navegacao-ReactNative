import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';//Container que gerencia a navegação
import { createStackNavigator } from '@react-navigation/stack';//Cria a navegação em pilha (stack)

import Login from './pages/Login';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contato';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      
    </View>
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
