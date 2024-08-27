import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      console.log(response)
    }

    fetchData()
  }, [])
  return (
    <View>
      <Text>DataFetching</Text>
    </View>
  )
}

export default DataFetching
