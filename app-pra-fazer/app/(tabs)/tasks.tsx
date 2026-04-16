import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { router } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TouchableOpacity style={styles.btnTask} onPress={() => router.push("/task_create")}>
        <Text style={styles.textBtnTask}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btnTask: {
    backgroundColor: "#070A52",
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  textBtnTask: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 2,
    textAlign: "center",
  },
});
