import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation, route }) {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={styles.user}>Bem-vindo, {nome}</Text>
      <View style={styles.iconContainer}>
        <Icon name="information-circle-outline" size={30} onPress={() => navigation.navigate('Sobre')} />
        <Icon name="chatbox-ellipses-outline" size={30} onPress={() => navigation.navigate('Contato', { nome })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  user: { marginBottom: 20 },
  iconContainer: { flexDirection: 'row', gap: 30 },
});
