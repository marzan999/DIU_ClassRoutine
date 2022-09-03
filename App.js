// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cse from "./src/Cse";
import Home from "./src/Home";
import Batch from "./src/Batch";
import Routine from "./src/Routine";
import Routine54 from "./src/Routine54";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CSE" component={Cse} />
        <Stack.Screen name="Batch" component={Batch} />
        <Stack.Screen name="Routine" component={Routine} />
        <Stack.Screen name="Routine54" component={Routine54} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
