import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
          <Image source={require('./assets/logo-app-imc.png')} style={styles.logo} />
      </View>

      <View style={styles.form}>
        <Text style={styles.texto}>Altura</Text>
      <TextInput style={styles.campo}></TextInput>

      <Text style={styles.texto}>Peso</Text>
      <TextInput style={styles.campo}></TextInput>

      <TouchableOpacity
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#249cb1',
  },

  containerLogo: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 170,
    height: 60,
  },

  form: {
    backgroundColor: '#ffffff',
    padding: 30,
    height: '100%',
    borderRadius: 10,
    borderTopStartRadius: 30,
  },

  campo: {
    backgroundColor: '#b3b0b0',
    width: '100%',
    marginBottom: 15,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
  },

  texto: {
    fontSize: 30,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#0b5c6b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
});

