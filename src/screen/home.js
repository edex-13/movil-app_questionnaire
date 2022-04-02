import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Footer from "../components/Footer";

export default function Home() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>¡Empieza a jugar!</Text>
        <View style={styles.form}>
          <TextInput
            type
            placeholder="Código del cuestionario"
            style={styles.input}
          />
          <TouchableHighlight
            style={styles.btn}
            onPress={handleClick}
            underlayColor={"#6F1DC6"}
          >
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Footer style={styles.footer} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 120,
  },

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F9F9F9",
  },
  form: {
    marginTop: 100,
    height: 150,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#E0E0E0",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    flex: 1,
  },
  btn: {
    margin: 5,
    flex: 1,
    padding: 10,
    backgroundColor: "rgb(255, 152, 0)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

});
