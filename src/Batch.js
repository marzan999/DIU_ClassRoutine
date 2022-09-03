import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routine from './Routine';

const Stack = createNativeStackNavigator();

export default function Batch({ navigation }) {
  return (
    <View style={styles.list}>
      <View style={styles.text1}>
        <Text style={styles.text2}>Select your batch</Text>
      </View>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.cse}>51st</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>52nd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Routine')}>
        <Text style={styles.cse}>53rd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Routine54')}>
        <Text style={styles.cse}>54th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>55th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>56th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>57th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>58th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>59th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>60th</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>61st</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>62nd</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>63rd</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  list: {
    padding: 10
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
    borderColor: '#00FFFF',
    borderTopWidth: 5,
  },
  btn:{
      paddingBottom: 10
  }
});