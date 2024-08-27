import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const weatherData = {
  Paris: '22 C, Clear ',
  London: '18 C, Cloudy ',
  Tokyo: '30 C, Rain ',
}
const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')

  const getWeather = () => {
    setWeather(weatherData[city] || 'No data available')
  }
  return (
    <View>
      <Text style={st.title}>Weather App</Text>
      <TextInput
        style={st.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  )
}

export default Weather
const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weather: {
    fontSize: 18,
    marginTop: 20,
  },
})
