import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const ProductsArray = () => {
  const products = [
    {
      name: 'Product 1',
      id: 1,
      rating: 3.5,
      price: 29.99,
      image:
        'https://thumbs.dreamstime.com/b/jammu-to-srinagar-border-road-india-roads-running-capital-state-kashmir-dangerous-mountainous-roads-41789799.jpg',
    },
    {
      name: 'Product 2',
      id: 2,
      rating: 3.5,
      price: 29.99,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6s7a-438h7bMg4wdmThGm-YBkZtUgODaGwlg8hs2eimW_gXpWgozPo_H-7fopToSZdhQ&usqp=CAU',
    },
    {
      name: 'Product 3',
      id: 3,
      rating: 3.5,
      price: 29.99,
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/8d/Chilla_Pahad_near_Penukonda%2C_Andhra_Pradesh_India.jpg',
    },
  ]
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'space-around',
            }}
          >
            <Image
              source={{ uri: item.image }}
              borderRadius={10}
              width={300}
              height={200}
            />
            <Text style={st.name}>{item.name}</Text>
            <Text style={st.common}>Rating: {item.rating}</Text>
            <Text style={st.common}>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsArray

const st = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  common: {
    marginBottom: 10,
  },
})
