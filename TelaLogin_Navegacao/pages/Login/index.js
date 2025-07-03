import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const validarLogin = () => {
    if (!nome || !email) {
      alert('Digite um usuário');
    } else {
      navigation.navigate('Home', { nome });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <Button title="Entrar" onPress={validarLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, 
 marginBottom: 15 },
});
