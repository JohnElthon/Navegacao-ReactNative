import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedbackBase, TouchableOpacity, View } from 'react-native';

import Icon from '@react-native-vector-icons/feather'

const MyIcone = <Icon name="cloud-lightning" size={50} color="#FF0000"></Icon>

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
     <Icon name='chrome' size={30} color="#0000ff"/>
     <Text>Google</Text>
     </TouchableOpacity>
     
     

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
