import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Routine54() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Routine of 54th Batch</Text>
          <Image
            style={styles.stretch}
            source={require('../54.png')}
          />
        </View>
      )
}


const styles = StyleSheet.create({
    stretch: {
        height: 500,
        width: 400,
    }, 
    text: {
        fontSize: 25,
        padding: 25, 
        paddingLeft: 90
    }
})