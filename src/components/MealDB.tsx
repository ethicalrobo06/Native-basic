import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const MealDB = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      )
      const result = await response.json()
      // console.log(result.meals)
      setData(result.meals)
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
        keyExtractor={(item: any) => item.idMeal}
        renderItem={({ item }) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ display: 'flex', marginBottom: 10 }}>
              <Image
                source={{ uri: item.strMealThumb }}
                height={150}
                width={150}
                style={{
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text style={st.text}>{item.strMeal}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default MealDB

const st = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
