import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>
      <ChildComponent name="Bhawna" age="19" />
    </View>
  )
}

export default ParentComponent
