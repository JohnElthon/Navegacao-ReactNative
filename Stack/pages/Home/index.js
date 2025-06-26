import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function dadosNavega(){
      // Navega para a tela Contatos passando nome e email como parâmetros
      navigation.navigate('Contatos', {nome:'John', email:'john@gmail.com'})
    }

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Button title='Ir para sobre' onPress={()=>navigation.navigate('Sobre')}></Button>

      <Button title='Ir para Contatos' onPress={dadosNavega}></Button> 
      {/* Botão que navega para Contatos com parâmetros */}
     

     
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
