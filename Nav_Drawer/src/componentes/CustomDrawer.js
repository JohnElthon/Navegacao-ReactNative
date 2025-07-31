import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
 
 
export default function CustomDrawer(props) {
 
  return (

 <DrawerContentScrollView {...props}>

   <View style={styles.drawaer}>
    <Image style={styles.imagem}source={require('../assets/perfil.png')}></Image>
    <Text style={styles.texto}>Seja bem vindo!</Text>
   </View>
   <DrawerItemList {...props}></DrawerItemList>
   </DrawerContentScrollView>
 
  );
}

const styles = StyleSheet.create({
    drawaer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    imagem:{
        width:65,
        height:65,
        
    },
    texto:{
        fontSize:17,
        marginTop:10,
        marginBottom:20,
        fontWeight:'bold'
    }
})
 
