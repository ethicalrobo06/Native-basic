import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const colors = ['#DC143C', '#90EE90', 'blue', '#DAE520']
const Colorpicker = () => {
  const [color, setColor] = useState('white')

  const handleColorPick = (color) => {
    setColor(color)
  }
  return (
    <View style={{ backgroundColor: `${color}` }}>
      <View>
        <Text>Pick a Color</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {colors.map((color) => (
          <TouchableOpacity key={color} onPress={() => handleColorPick(color)}>
            <View
              style={{
                backgroundColor: `${color}`,
                height: 50,
                width: 50,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Colorpicker
