import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomUser = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?results=10'
        )
        setUsers(response.data.results)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error:{error}</Text>
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item: any) => item.login.uuid}
        renderItem={({ item }) => (
          <View style={st.itemContainer}>
            <Image source={{ uri: item.picture.thumbnail }} style={st.avatar} />
            <View style={st.infoContainer}>
              <Text style={st.name}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={st.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default RandomUser
const st = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
})
