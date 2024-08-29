import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Enter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Entrada</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Enter;
