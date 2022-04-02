import { View, Text, StyleSheet  , Span} from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>❮❯ by</Text>
        <Text style={styles.textBorder}> Ederson Lopez</Text>
        <Text style={styles.text}> & </Text>
        <Text style={styles.textBorder}>Jose Ortiz</Text>
        <Text style={styles.text}> 2022 </Text>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202329",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    padding: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9e9e9e",
    fontSize: 18,
  },
  textBorder: {
    borderBottomWidth: 2,
    borderBottomColor: "rgb(255, 152, 0)",
    color: "#E0E0E0",
    fontSize: 16,
    fontWeight: "bold",
  },

});
