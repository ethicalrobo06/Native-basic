import { View, Text, Button } from 'react-native'
import React, { useReducer, useState } from 'react'

const initialState: State = { count: 0 }

interface State {
  count: number
}
type Action = { type: 'increment' } | { type: 'decrement' }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error('Unhandled action type')
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text>Count: {state.count}</Text>

      <Button
        title="Increment"
        onPress={() => dispatch({ type: 'increment' })}
      />

      <Button
        title="Decrement"
        onPress={() => dispatch({ type: 'decrement' })}
      />
    </View>
  )
}

export default Reducer
