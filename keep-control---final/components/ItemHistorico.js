import React from 'react'
import {View, ScrollView, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'

export default ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container2}>
        <Text style={styles.title}>{data}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14487c',
    borderRadius: 10,
    elevation: 10,
    margin: 10,
  },
  container2: {
    height: 60,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})