import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import "react-native-gesture-handler";

import NavigationStack from "./src/natigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationStack/>
      </SafeAreaView>
    </NavigationContainer>
  );
}
