import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a Empresa</Text>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.text}>Nossa missão é inovar com responsabilidade e criatividade.</Text>
      <Button title="Voltar à Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  image: { width: 150, height: 150, marginVertical: 10 },
  text: { textAlign: 'center', marginBottom: 20 },
});
