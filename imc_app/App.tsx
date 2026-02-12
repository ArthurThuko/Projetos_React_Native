import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#249cb1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  campo: {
    backgroundColor: '#fff',
    width: '80%',
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
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});

