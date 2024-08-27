import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

interface ProductProps {
  name: string
  price: string
  image: string
  description: string
}

const Accessories = ({ name, price, image, description }: ProductProps) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 80 }}>
      <View style={{ display: 'flex', marginBottom: 10 }}>
        <Image source={{ uri: image }} height={100} width={80} />
      </View>
      <View style={{ display: 'flex', rowGap: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{name}</Text>
        <Text>${price}</Text>
        <Text style={st.box}>Featured</Text>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default Accessories

const st = StyleSheet.create({
  box: {
    backgroundColor: '#D8BFD8',
  },
})
