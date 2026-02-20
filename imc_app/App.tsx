import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState<string>("");

  function validarCampos() {
    
  }

  function calculoIMC(){
    let imcCalculado = parseFloat(peso) / (parseFloat(altura)**2);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
      setClassificacao("Abaixo do Peso");
    } else if (imcCalculado < 25) {
      setClassificacao("Peso Normal");
    } else if (imcCalculado < 30) {
      setClassificacao("Sobrepeso");
    } else {
      setClassificacao("Obesidade");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("./assets/logo-app-imc.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.form}>
        {imc === null && (
          <Text style={styles.alerta}>Preencha a altura e o peso</Text>
        )}

        <Text style={styles.texto}>Altura</Text>
        <TextInput style={styles.campo} onChangeText={setAltura} keyboardType="numeric" placeholder="Ex: 1.75"></TextInput>

        <Text style={styles.texto}>Peso</Text>
        <TextInput style={styles.campo} onChangeText={setPeso} keyboardType="numeric" placeholder="Ex: 70"></TextInput>

        <TouchableOpacity style={styles.botao} onPress={calculoIMC}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        {imc !== null && (
          <View style={styles.resultado}>
            <Text style={styles.labelResultado}>Seu IMC é:</Text>
            <Text style={styles.resultadoIMC}>{imc?.toFixed(1)}</Text>
            <Text style={styles.labelResultado}>Classificação</Text>
          <Text style={styles.classificaoIMC}>{classificacao}</Text>
        </View>
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

  containerLogo: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 170,
    height: 60,
  },

  form: {
    backgroundColor: "#ffffff",
    padding: 30,
    height: "100%",
    borderRadius: 10,
    borderTopStartRadius: 30,
  },

  alerta: {
    textAlign: 'center',
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
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

  resultado: {
    backgroundColor: "#DDD",
    padding: 15,
    borderRadius: 20,
  },

  labelResultado: {
    fontSize: 18,
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 10,
  },

  resultadoIMC: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },

  classificaoIMC: {
    backgroundColor: "#ff0000",
    color: "#FFF",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },
});
