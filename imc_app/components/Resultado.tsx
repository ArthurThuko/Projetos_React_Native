import { StyleSheet, View, Text } from "react-native";

export function Resultado(props: { imc: number }) {
  let color;
  let classificacao;

  if (props.imc < 18.5) {
    classificacao = "Abaixo do Peso";
    color = styles.perigo;
  } else if (props.imc < 25) {
    classificacao = "Peso Normal";
    color = styles.normal;
  } else if (props.imc < 30) {
    classificacao = "Sobrepeso";
    color = styles.alerta;
  } else {
    classificacao = "Obesidade";
    color = styles.perigo;
  }

  return (
    <View style={[styles.resultado]}>
      <Text style={styles.labelResultado}>Seu IMC é:</Text>
      <Text style={styles.resultadoIMC}>{props.imc?.toFixed(1)}</Text>
      <Text style={styles.labelResultado}>Classificação</Text>
      <Text style={[color, styles.classificaoIMC]}>{classificacao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  perigo: {
    backgroundColor: "#ff0000",
  },

  alerta: {
    backgroundColor: "#e2e23f",
  },

  normal: {
    backgroundColor: "#008500",
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
    color: "#FFF",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 10,
  },
});
