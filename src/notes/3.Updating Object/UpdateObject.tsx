import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {
  const [movie, setMovie] = useState({
    title: 'Animal',
    ratings: 6,
  })

  const handleClick = () => {
    setMovie({ ...movie, ratings: 5 })
  }
  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{movie.ratings}</Text>
      <Button title="Change Ratings" onPress={handleClick} />
    </View>
  )
}

export default UpdateObject
