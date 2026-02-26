import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Topo } from "./components/Topo";
import { Resultado } from "./components/Resultado";

export default function App() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState<string>("");
  const [alerta, setAlerta] = useState<boolean>(false);

  function validarCampos() {
    if (peso !== "" && altura !== "") {
      setAlerta(false);
      calculoIMC();
    } else {
      setAlerta(true);
    }
  }

  function calculoIMC() {
    let imcCalculado = parseFloat(peso) / parseFloat(altura) ** 2;
    setImc(imcCalculado);
  }

  return (
    <View style={styles.container}>
      <Topo></Topo>

      <View style={styles.form}>
        {alerta === true && (
          <Text style={styles.alerta}>Preencha a altura e o peso</Text>
        )}

        <Text style={styles.texto}>Altura</Text>
        <TextInput
          style={styles.campo}
          onChangeText={setAltura}
          keyboardType="numeric"
          placeholder="Ex: 1.75"
        ></TextInput>

        <Text style={styles.texto}>Peso</Text>
        <TextInput
          style={styles.campo}
          onChangeText={setPeso}
          keyboardType="numeric"
          placeholder="Ex: 70"
        ></TextInput>

        <TouchableOpacity style={styles.botao} onPress={validarCampos}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        {imc !== null && alerta === false && (
          <Resultado imc={imc}></Resultado>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#249cb1",
  },

  form: {
    backgroundColor: "#ffffff",
    padding: 30,
    height: "100%",
    borderRadius: 10,
    borderTopStartRadius: 30,
  },

  alerta: {
    textAlign: "center",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    borderRadius: 5,
  },

  campo: {
    backgroundColor: "#b3b0b0",
    width: "100%",
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
    backgroundColor: "#0b5c6b",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
