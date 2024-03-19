import React, {useState} from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as AtivoApi from '../../api/AtivoApi'

export default ({ navigation, route }) => {

  const [name, setName] = useState('')
  const [numSerie, setNumSerie] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [tipo, setTipo] = useState('')
  const [model, setModel] = useState('')
  const [department, setDepartment] = useState('')
  const [manufacturingDate, setManufecturingDate] = useState('')

  const newAtivo = async () => {
    await AtivoApi.cadastroAtivo(name,numSerie,manufacturer,tipo,model,department,manufacturingDate);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Digite seus dados do ativo</Text>
      <View style={styles.inputs}>
        <Text style={styles.inputTitle}>Nome do Equipamento: </Text>
        <TextInput
          mode="outlined"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Numero de Série: </Text>
        <TextInput
          mode="outlined"
          value={numSerie}
          onChangeText={(text) => setNumSerie(text)}
          style={styles.input}
          placeholder="Número de Série"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Fabricante: </Text>
        <TextInput
          mode="outlined"
          value={manufacturer}
          onChangeText={(text) => setManufacturer(text)}
          style={styles.input}
          placeholder="Fabricante"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Tipo: </Text>
        <TextInput
          mode="outlined"
          value={tipo}
          onChangeText={(text) => setTipo(text)}
          style={styles.input}
          placeholder="Tipo"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Modelo: </Text>
        <TextInput
          mode="outlined"
          value={model}
          onChangeText={(text) => setModel(text)}
          style={styles.input}
          placeholder="Modelo"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Departamento: </Text>
        <TextInput
          mode="outlined"
          value={department}
          onChangeText={(text) => setDepartment(text)}
          style={styles.input}
          placeholder="Departamento"
          placeholderTextColor="#193073"
        />
        <Text style={styles.inputTitle}>Data de Fabricação</Text>
        <TextInput
          mode="outlined"
          value={manufacturingDate}
          onChangeText={(text) => setManufecturingDate(text)}
          style={styles.input}
          placeholder="Data"
          placeholderTextColor="#193073"
        />
        <Button
          mode="contained"
          textColor="white"
          style={styles.botaoFinalizar}
          onPress={() =>  newAtivo() }>
          FINALIZAR
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    
  },
  
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#193073",
  },

  inputTitle: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#14487c',
  },

  input: {
    marginTop: 10,
  },

  botaoFinalizar: {
    marginTop: 25,
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: '#203d92',
    alignSelf: 'center',
  },
})