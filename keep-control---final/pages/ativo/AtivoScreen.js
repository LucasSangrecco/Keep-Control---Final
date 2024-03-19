import React, {useState, useEffect} from 'react'
import { ScrollView, Text, StyleSheet} from 'react-native'
import ItemAtivo from '../../components/ItemAtivo'

export default () => {

  return (
    <ScrollView style={styles.container}>
      <ItemAtivo />      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
})