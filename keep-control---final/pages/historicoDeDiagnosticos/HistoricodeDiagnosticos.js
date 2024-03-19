import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import ItemHistorico from '../../components/ItemHistorico';
import * as UserRepository from '../../api/UserRepository';
import { useFocusEffect } from "@react-navigation/native";

export default ({navigation, route}) => {
  const [data, setData] = useState('');

  const handleFetchData = async () => {
    const res = await UserRepository.getDiagnostico();
    const data = res ? JSON.parse(res) : [];
    setData(data);
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <ItemHistorico
            data={UserRepository.formatDate(item.createdAt)}
            onPress={() => navigation.navigate('diagnosticoAntigo')}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'   
  }
})