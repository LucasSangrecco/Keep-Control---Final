import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as UserRepository from '../api/UserRepository';
import { useFocusEffect } from "@react-navigation/native";

export default ({ route }) => {
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

const formattedDate = UserRepository.formatDate(data.manufacturingDate);

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteinerTitle}>
        <Text style={styles.title}>Dados do Ativo</Text>
      </View>
      <View style={styles.conteinerDados}>
        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Nome: </Text>
          <Text style={styles.dado}>{data.name}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>ID: </Text>
          <Text style={styles.dado}>{data.id}</Text>
        </View>
        
        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Número de série: </Text>
          <Text style={styles.dado}>{data.numserie}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Fabricante: </Text>
          <Text style={styles.dado}>{data.manufacturer}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Tipo: </Text>
          <Text style={styles.dado}>{data.tipo}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Modelo: </Text>
          <Text style={styles.dado}>{data.model}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Data de Fabricação: </Text>
          <Text style={styles.dado}>{formattedDate}</Text>
        </View>

        <View style={styles.conteinerDado}>
          <Text style={styles.tituloDado}>Setor: </Text>
          <Text style={styles.dado}>{data.department}</Text>
        </View>

        <View style={styles.conteinerDadoEnd}>
          <Text style={styles.tituloDado}>Localização: </Text>
          <Text style={styles.dado}>{data.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#14487c'
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
    padding: 10,
    flex: 1,
  },

  conteinerDado: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#14487c',
    flex: 1,
  },

  conteinerDadoEnd: {
    flexDirection: 'row',
    padding: 20,
  },

  tituloDado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14487c',
  },

  dado: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    color: '#14487c',
  },
});
