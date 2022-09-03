import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Batch from "./Batch";

const Stack = createNativeStackNavigator();

export default function Cse({ navigation }) {
  return (
    <View style={styles.list}>
      <View style={styles.text1}>
        <Text style={styles.text2}>Select your Shift</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Batch")}
      >
        <Text style={styles.cse}>1st Shift</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>2nd Shift</Text>
      </TouchableOpacity>

    </View>
  );
  
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  text1: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 25,
  },
  cse: {
    fontSize: 30,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#00FFFF",
    borderTopWidth: 5,
  },
  btn: {
    paddingBottom: 10,
  },
});


