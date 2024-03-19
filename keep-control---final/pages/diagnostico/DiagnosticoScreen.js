import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Switch } from 'react-native-paper';
import * as UserRepository from '../../api/UserRepository';
import { useFocusEffect } from "@react-navigation/native";

export default ({ navigation, route }) => {
  const [diagnostico, setDiagnostico] = useState('');
  const [materiais, setMateriais] = useState('');
  const [data, setData] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn((previousState) => !previousState);
  };

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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Insira os dados do diagnóstico nos seus respectivos campos</Text>
      <View style={styles.containerDados}>
        <Text style={styles.dataTitle}>Equipamento: </Text>
        <Text style={styles.dataText}>{data.name}</Text>
      </View>
      <View style={styles.containerDados}>
        <Text style={styles.dataTitle}>Id: </Text>
        <Text style={styles.dataText}>{data.id}</Text>
      </View>
      <Text style={styles.inputTitle}>Diagnóstico do equipamento: </Text>
      <TextInput
        mode="outlined"
        multiline
        numberOfLines={5}
        value={diagnostico}
        onChangeText={(text) => setDiagnostico(text)}
        style={styles.input}
        placeholder="Diagnóstico"
        placeholderTextColor="#193073"
      />
      <View style={styles.containerSwitch}>
      <Text style={styles.switchTitle}>Inserir materiais necessários: </Text>
        <Switch
          trackColor={{ true: '#203d92' }}
          thumbColor={!isSwitchOn ? 'lightgrey' : '#6d89df'}
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          style={styles.switchMateriais}
        />
      </View>
      {isSwitchOn && (
        <View>
          <Text style={styles.inputTitle}>Materiais: </Text>
          <TextInput
            mode="outlined"
            multiline
            numberOfLines={5}
            value={materiais}
            onChangeText={(text) => setMateriais(text)}
            style={styles.input}
            placeholder="Materiais"
            placeholderTextColor="#193073"
          />
        </View>
      )}
      <Button
        mode="contained"
        labelStyle={{ color: 'white' }}
        style={styles.botaoEntrar}
        onPress={() => navigation.goBack()}>
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
    flexWrap: 'wrap',
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
  
  containerSwitch:{
    flexDirection: 'row',
  },

  switchTitle: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#14487c',
  },
  
  switchMateriais:{
    marginTop: 20,
    marginLeft: 20,
  },
  
  botaoEntrar: {
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