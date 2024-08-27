import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    setTasks([...tasks, task])
    setTask('')
  }

  return (
    <View>
      <TextInput
        style={st.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <View style={{ marginTop: 20 }}>
        {tasks.map((t, i) => (
          <Text key={i}>{t}</Text>
        ))}
      </View>
    </View>
  )
}
export default Todo

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
