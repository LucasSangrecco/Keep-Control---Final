import React from 'react'
import { ScrollView, Text, StyleSheet} from 'react-native'
import ItemRelatorioDiagnostico from '../../components/ItemRelatorioDiagnostico'

export default () => {
  return(
    <ScrollView style={styles.container}>
      <ItemRelatorioDiagnostico/>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
container: {
  padding: 20,
}
})