import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObject = () => {
  const locations = [
    {
      id: 1,
      name: 'Manali',
    },
    {
      id: 2,
      name: 'Delhi',
    },
    {
      id: 3,
      name: 'Mumbai',
    },
  ]
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

export default ArrayOfObject
