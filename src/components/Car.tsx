import { View, Text, Image } from 'react-native'
import React from 'react'

const Car = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto.jpg',
        }}
        style={{ height: 300, width: 400 }}
      />
    </View>
  )
}

export default Car
