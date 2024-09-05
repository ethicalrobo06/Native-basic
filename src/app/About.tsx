import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View>
      <Text>About Screen</Text>
      <Link href="/users/10">go to users screen</Link>
    </View>
  )
}

export default About
