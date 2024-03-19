import React, {useState, useEffect} from 'react'
import { ScrollView, Text, StyleSheet} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import * as UserRepository from '../../api/UserRepository';
import * as AtivoApi from '../../api/AtivoApi';
import * as ManutencaoApi from '../../api/ManutencaoApi';
import * as DiagnosticoApi from '../../api/DiagnosticoApi';

export default ({navigation, route}) => {
  const [idAtivo, setIdAtivo] = useState('f6e2a8d9-1b8c-4a75-9f3d-2c7fe6e1a5d3')

  const saveAtivoId = async () => {
    if (!idAtivo.trim()) {
        alert('Por favor, insira um ID válido.');
        return;
      }
      await AtivoApi.dadosAtivo(idAtivo);
      await ManutencaoApi.buscarManutencao(idAtivo);
      await DiagnosticoApi.buscarDiagnostico(idAtivo);
      await UserRepository.saveAtivoId(idAtivo);
      navigation.navigate('escolha');
  }
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Digite o ID do ativo que deseja buscar</Text>
      <TextInput
        mode= 'outlined'
        value={idAtivo}
        onChangeText={(text) => setIdAtivo(text)}
        style={styles.id}
        placeholder="ID"
        placeholderTextColor="#193073"
      />
     <Button
        mode="contained"
        textColor="white"
        style={styles.botaoEntrar}
        onPress={saveAtivoId}>
        ENTRAR
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#14487c',
  },
  id:{
    marginBottom: 30,
  },
  
  botaoEntrar: {
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: '#203d92',
    alignSelf: 'center',
  },
})