import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login(){
    return(
         <View style={styles.container}>
          
              <Text>Faça Login</Text>
              <TextInput placeholder="Nome" style={styles.input} />
             
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
    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginTop: 10,
    paddingHorizontal: 10,
    },
    });
    