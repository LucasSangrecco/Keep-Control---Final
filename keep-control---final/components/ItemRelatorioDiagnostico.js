import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default () => {

  
  return(
    <View style={styles.conteiner}>
      <View style={styles.conteinerTitle}>
        <Text style={styles.title}>Relatório</Text>
      </View>
      <View style={styles.conteinerDados}>
        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Nome: </Text>
          <Text style={styles.dado}> Hemodinâmica</Text>
        </View>
        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>ID: </Text>
          <Text style={styles.dado}> f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3</Text>
        </View>
        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Data: </Text>
          <Text style={styles.dado}> 00/00/0000 às 00:00</Text>
        </View>
        <View style={styles.conteinerDadoRelatorio}>
          <Text style={styles.tituloDado}>Relatório: </Text>
          <Text style={styles.dadoRelatorio}> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium a risus ac maximus. Ut placerat velit non libero varius, quis ultrices metus auctor. Praesent enim erat, tempus nec placerat quis, dignissim tristique quam. Aenean facilisis tortor vel nisi suscipit, a viverra risus iaculis. Vivamus tempus lacinia nulla ac mollis. Praesent eu ultrices diam, nec aliquet tortor. Praesent aliquam justo lorem, dictum pellentesque nisl suscipit a. Aenean quis malesuada nulla. Morbi eget ligula leo. Vestibulum lorem lorem, malesuada nec facilisis at, malesuada bibendum lectus. Nam ultricies auctor ipsum, eu maximus mauris luctus non. Donec sollicitudin diam luctus vestibulum rutrum. Integer eu sem turpis. Cras fermentum sem quis sollicitudin rutrum. Sed egestas libero elit, et tincidunt quam hendrerit non. Quisque sit amet eros malesuada, ornare nibh sed, porttitor sapien.
          </Text>
        </View>
        <Text style={styles.tituloDado}>Materiais </Text>
        <View style={styles.conteinerDadoEnd}>
          <View style={styles.conteinerDado1}>
            <Text style={styles.tituloDado}>Item: </Text>
            <Text style={styles.dado}>  Bomba de Infusão</Text>
          </View>
          <View style={styles.conteinerDado1}>
            <Text style={styles.tituloDado}>Qtde: </Text>
            <Text style={styles.dado}> 03</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  conteiner: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#14487c',
    marginBottom: 40
  },

  conteinerTitle:{
    backgroundColor: '#14487c',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    alignSelf: 'center',
    color: 'white',
  },

  conteinerDados: {
    padding: 14,
  },

  conteinerDado: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#14487c',
  },

  conteinerDadoRelatorio: {
    borderBottomWidth: 1,
    borderColor: '#14487c'
  },

  conteinerDadoEnd: {
    padding: 5,
    justifyContent: 'space-between'
  },

  conteinerDado1: {
    flexDirection: 'row',
  },

  tituloDado: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#14487c',
  },

  dado: {
    flex: 1,
    fontSize: 18,
    marginTop: 10,
    color: '#14487c',
    flexWrap: 'wrap',
  },

  dadoRelatorio: {
    fontSize: 18,
    marginTop: 10,
    color: '#14487c',
    flexWrap: 'wrap',
    padding: 10
  },
})