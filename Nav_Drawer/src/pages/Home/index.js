import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
 
 
export default function Home() {

  const navigation = useNavigation();

  function navegaDetalhes(){
    navigation.navigate('Detalhes')
  
  }
 
  return (
 
   <View style={styles.container}>
    <Text>Home</Text>
    <Button title='Ir para Detalhes' onPress={navegaDetalhes}></Button>
    <Button title='Abrir Drawer' onPress={()=>navigation.openDrawer()}></Button>
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