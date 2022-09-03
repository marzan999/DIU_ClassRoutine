import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Batch() {
  return (
    <View style={styles.list}>
      <View style={styles.text1}>
        <Text style={styles.text2}>Select your department</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CSE')}>
        <Text style={styles.cse}>51</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>52</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>53</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.cse}>54</Text>
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