import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native'
import React, { useReducer, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

interface Todo {
  id: string
  text: string
}
interface State {
  todos: Todo[]
}

interface AddTodoAction {
  type: 'addTodo'
  payload: string
}

interface RemoveTodoAction {
  type: 'removeTodo'
  payload: string
}

type Action = AddTodoAction | RemoveTodoAction

const initialState = { todos: [] }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      }
    case 'removeTodo':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [inputValue, setInputValue] = useState<string>('')
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'addTodo', payload: inputValue })
      setInputValue('')
    }
  }

  const handleRemoveTodo = (id: string) => {
    dispatch({ type: 'removeTodo', payload: id })
  }
  return (
    <View>
      <TextInput
        style={st.input}
        placeholder="Enter task"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default TodoList

const st = StyleSheet.create({
  input: { height: 40, margin: 10, borderWidth: 1, padding: 10 },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    margin: 15,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 8,
  },
})
