import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View>
      <Text style={style.textStyle}>InternalStyle</Text>
    </View>
  )
}

const style = StyleSheet.create({
  textStyle: {
    color: 'crimson',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    marginBottom: 20,
    padding: 10,
  },
})

export default InternalStyle
