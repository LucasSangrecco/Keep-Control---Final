import React from 'react'
import { ScrollView, Text, StyleSheet} from 'react-native'
import ItemRelatorioManutencao from '../../components/ItemRelatorioManutencao'

export default () => {
  return(
    <ScrollView style={styles.container}>
      <ItemRelatorioManutencao/>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
container: {
  padding: 20,
  }
})