import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Register from './Register'; // Importando a tela Register
import Enter from './Enter'; // Importando a tela Entrada

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Image
          source={require('../imgs/imgLogoTcc.png')}
          style={styles.imagemLogo}
        />

        <View style={styles.containerTitle}>
          <Text style={styles.titulo}>Entre ou Registre-se!</Text>
        </View>

        <Pressable 
          style={styles.botaoRegistrar} 
          onPress={() => {
          navigation.navigate('Register');
          }}
          >
          <Text style={styles.textoBotaoEntrar}>Registrar</Text>
        </Pressable>


          <Pressable 
            style={styles.botaoEntrar} 
            onPress={() => {
            navigation.navigate('Enter');
            }}
          >
            <Text style={styles.textoBotaoEntrar}>Entrar</Text>
          </Pressable>

        <View style={styles.imagesContainer}>
          <Image
            source={require('../imgs/imgFolha2.png')}
            style={styles.folhaEsquerda}
          />

          <Image
            source={require('../imgs/folha.png')}
            style={styles.folhaDireita}
          />

          <Image
            source={require('../imgs/mascoteTOF2.png')}
            style={styles.mascoteImage}
          />

          <Image
            source={require('../imgs/folha3.png')}
            style={styles.folha3}
          />
        </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Enter" component={Enter}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  titulo: {
    fontSize: 24,
    marginTop: -5,
    left: 5,
    fontWeight: 'bold',
    color: '#32cd32',
  },
  imagemLogo: {
    height: 100,
    width: 150,
    marginBottom: 20,
    left: 7
  },
  botaoEntrar: {
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 180,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoRegistrar: {
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 180,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  textoBotaoEntrar: {
    fontWeight: 'bold',
  },
  imagesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
  folhaEsquerda: {
    position: 'absolute',
    top: 350,
    left: -50,
    width: 200,
    height: 500
  },
  folhaDireita: {
    position: 'absolute',
    top: 520,
    right: 20,
    width: 100,
    height: 200
  },

  mascoteImage: {
    height: 400,
    width: 400,
    left: 100
  },

  containerTitle: {
    position: 'relative',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#32cd32',
    bottom: 10
  },

  folha3: {
    position: 'absolute',
    bottom: 350,
    right: 85
  }
});