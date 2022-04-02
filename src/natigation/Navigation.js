import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/home.js";
import responder from "../screen/responder";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Questionarios",
          headerStyle: {
            backgroundColor: "#F3F2F3"
          },
          headerTintColor: "rgb(255, 152, 0)",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="responder" component={responder} />
    </Stack.Navigator>
  );
}
