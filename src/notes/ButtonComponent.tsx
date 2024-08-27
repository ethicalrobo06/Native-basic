import { View, Text, Button, Pressable } from 'react-native'
// OnPress,onPressIn,OnPressOut,onLongPress

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      <Button
        title="Check console"
        onPress={() => console.warn('Pressed')}
        color="black"
      />
      {/* <Button title="Tap me" color="grey" disabled></Button> */}

      <Pressable onPress={() => console.log('pressed')}>
        <Text style={{ color: 'teal' }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log('pressed in')}>
        <Text style={{ color: 'red' }}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log('pressed out')}>
        <Text style={{ color: 'coral' }}>Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log('pressed long')}>
        <Text style={{ color: 'crimson' }}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent
