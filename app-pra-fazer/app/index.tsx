import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../scripts/firebase-config";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/(tabs)/tarefas");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo_pra_fazer.png")}
      />
      {error != null && <Text style={styles.alert}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => router.push("/user_create")}
      >
        <Text style={styles.buttonCreateText}>Criar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F60",
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    marginBottom: 50,
  },
  alert: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#070A52",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  textButton: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
  buttonCreate: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  buttonCreateText: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
});
