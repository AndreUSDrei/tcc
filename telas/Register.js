import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function Register() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.label} />

      <Image
        source={require('../imgs/mascoteTOF2.png')}
        style={styles.mascote}
      />

      <Image
        source={require('../imgs/imgFolha2.png')}
        style={styles.folhaEsquerda}
      />

      <Image
        source={require('../imgs/folha.png')}
        style={styles.folhaDireita}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  mascote: {
    position: 'absolute',
    height: 310,  // 40% da altura da tela
    width: 310,    // 40% da largura da tela
    top: height * 0.6,    // 55% da altura da tela
    left: width * 0.27,    // 25% da largura da tela
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    position: 'absolute',
    borderStyle: 'solid',
    width: width * 0.5,    // 50% da largura da tela
    borderBottomWidth: 1,
    bottom: height * 0.7   // 70% da altura da tela
  },

  folhaEsquerda: {
    position: 'absolute',
    top: height * 0.4,     // 40% da altura da tela
    right: width * 0.3,    // 30% da largura da tela
  },

  folhaDireita: {
    position: 'absolute',
    height: height * 0.3,  // 30% da altura da tela
    width: width * 0.3,    // 30% da largura da tela
    top: height * 0.77,    // 65% da altura da tela
    left: width * 0.75      // 60% da largura da tela
  }
});

export default Register;
