import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Accessories from './Accessories'

const ParentAccessories = () => {
  const products = [
    {
      name: 'Product A',
      price: '19,99',
      image: 'https://m.media-amazon.com/images/I/41Kz9H3v0yL.jpg',
      description: 'Description for Product A',
    },
    {
      name: 'Product B',
      price: '19,99',
      image:
        'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg',
      description: 'Description for Product B',
    },
    {
      name: 'Product C',
      price: '19,99',
      image:
        'https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020_big.jpg.large.jpg',
      description: 'Description for Product C',
    },
  ]

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Accessories
          name={item.name}
          price={item.price}
          image={item.image}
          description={item.description}
        />
      )}
    />
  )
}

export default ParentAccessories
