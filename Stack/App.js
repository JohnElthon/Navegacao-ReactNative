import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';//Container que gerencia a navegação
import { createStackNavigator } from '@react-navigation/stack';//Cria a navegação em pilha (stack)

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contatos from './pages/Contatos';
import

const Stack = createStackNavigator();// Cria o objeto de navegação em pilha

export default function App() {
  return (

    //NavigationContainerComponente que envolve toda a navegação do app
    //Stack.Navigator Define as telas da navegação em pilha
    //Stack.Screen são as telas do app
    <NavigationContainer>     
      
      <Stack.Navigator> 

        <Stack.Screen name="Home" component={Home} options={{title:'Tela Inicio',
          headerStyle:{ //Define o estilo do cabeçalho (cor de fundo,bordas...)
            backgroundColor:'#121212'  
          },
          headerTintColor:'#fff' //Define a cor dos elementos do cabeçalho, como o título e o botão de voltar
          //Essa propriedade deve estar no mesmo nível de headerStyle, não dentro dele.
          }} />
        <Stack.Screen name="Sobre" component={Sobre} options={{title:'Sobre',
          headerStyle:{ backgroundColor:'#121212'
          },
          headerTintColor:'#fff'

        }} /> 
        <Stack.Screen name="Contatos" component={Contatos} options={{title:'Contatos',
          headerStyle:{backgroundColor:'#121212'        
          },
          headerTintColor:'#fff'
        }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

