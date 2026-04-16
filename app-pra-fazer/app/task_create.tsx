import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, database } from "../scripts/firebase-config";
import { useRouter } from 'expo-router';
import { ref, push, set } from "firebase/database";

export default function CreateTask() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [erro, setError] = useState(null);
  const router = useRouter();
  
  function taskCreate() {
    const taskAuth = ref(database, "tasks/"+auth.currentUser?.uid);
    const newTask = push(taskAuth);
    set(newTask, {
      date: date,
      task: task
    });
  }
      

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Tarefa</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Data"
      />
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Nome"
      />
      <TouchableOpacity style={styles.button} onPress={() => taskCreate()}>
        <Text style={styles.textButton}>Criar tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#fff",
    fontSize: 32,
    marginBottom: 50,
  },
  container: {
    backgroundColor: "#F60",
    padding: 30,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
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
});