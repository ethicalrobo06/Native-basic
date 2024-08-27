import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
  const [friends, setFriends] = useState(['Modi', 'Panda', 'Samay'])

  const addOne = () => {
    setFriends([...friends, 'Harris'])
  }

  const removeOne = () => setFriends(friends.filter((f) => f != 'Harris'))

  const updateOne = () =>
    setFriends(friends.map((f) => (f === 'Panda' ? 'Panda ji' : f)))

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title="Add One" onPress={addOne} />
      <Button title="Remove One" onPress={removeOne} />
      <Button title="Update One" onPress={updateOne} />
    </View>
  )
}

export default UpdateArray
