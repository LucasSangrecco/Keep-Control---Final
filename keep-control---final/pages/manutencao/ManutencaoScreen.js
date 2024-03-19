import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Switch } from 'react-native-paper';
import * as ManutencaoApi from '../../api/ManutencaoApi';
import * as UserRepository from '../../api/UserRepository';
import { useFocusEffect } from "@react-navigation/native";

export default ({ navigation, route }) => {

  const [report, setReport] = useState('');
  const [data, setData] = useState('');

  const handleFetchData = async () => {
  const res = await UserRepository.getAtivo()
  const data = res ? JSON.parse(res) : {};
    setData(data);
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

    const sendReport = async (report) => {
    await ManutencaoApi.inserirManutencao(report);
    navigation.goBack('escolha');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Insira o relatorio de manutenção no campo abaixo</Text>
      <View style={styles.containerDados}>
        <Text style={styles.dataTitle}>Equipamento: </Text>
        <Text style={styles.dataText}>{data.name}</Text>
      </View>
      <View style={styles.containerDados}>
        <Text style={styles.dataTitle}>Id: </Text>
        <Text style={styles.dataText}>{data.id}</Text>
      </View>
      <Text style={styles.inputTitle}>Relatório de manutenção do equipamento: </Text>
      <TextInput
        mode="outlined"
        multiline
        numberOfLines={5}
        value={report}
        onChangeText={(text) => setReport(text)}
        style={styles.input}
        placeholder="Relatório"
        placeholderTextColor="#193073"
      />
      <Button
        mode="contained"
        labelStyle={{ color: 'white' }}
        style={styles.botaoSalvar}
        onPress={() => sendReport(report)}>
        SALVAR
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#14487c',
  },

  containerDados: {
    flexDirection: 'row',
  },

  dataTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#14487c',
  },

  dataText: {
    flex: 1,
    fontSize: 18,
    marginTop: 10,
    color: '#14487c',
  },

  inputTitle: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#14487c',
  },

  input:{
    color: '#14487c',
  },
  
  botaoSalvar: {
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