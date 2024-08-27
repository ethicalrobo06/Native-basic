import { View, Text } from 'react-native'
import React from 'react'

interface ChildProps {
  name: String
  age: number
}

const ChildComponent = ({ name, age }: ChildProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default ChildComponent
