import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={require('../assets/defaultUser.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
      />

      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/c8/3f/e9/c83fe960f595001b1f8ece721a4f9c57.jpg',
        }}
        style={{ width: 100, height: 150, marginTop: 5 }}
      />
    </View>
  )
}

export default ImageComponent
