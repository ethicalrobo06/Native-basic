import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ViewComponent = () => {
  return (
    <View>
      <View style={st.shadowStyle}>
        <Text>My name is huxn and i love coding.</Text>
      </View>
      <View style={st.shadowStyle}>
        <Text>I'm 5 years old.</Text>
      </View>
      <View style={st.shadowStyle}>
        <Text>Here is my X handle .</Text>
      </View>
      <View style={st.shadowStyle}>
        <Text>I love coding.</Text>
      </View>
    </View>
  )
}

const st = StyleSheet.create({
  shadowStyle: {
    padding: 20,
    width: '80%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default ViewComponent
