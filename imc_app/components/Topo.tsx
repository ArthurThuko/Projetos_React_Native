import { Image, StyleSheet, View } from "react-native";

export function Topo() {
  return (
    <View style={styles.containerLogo}>
      <Image
        source={require("../assets/logo-app-imc.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 170,
    height: 60,
  },
});
