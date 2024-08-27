import { View, Text, Button } from 'react-native'
import React from 'react'

const CarText = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Car Name</Text>
      <Text>Here is some random car description</Text>
      <Button color="black" title="Add to Cart" />
    </View>
  )
}

export default CarText
