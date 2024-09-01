import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')

      const result = await response.json()
      setData(result)
    }
    try {
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default DataFetching
