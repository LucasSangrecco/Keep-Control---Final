import React from  'react'
import { View, Text, FlatList,StyleSheet} from 'react-native'
import BotaoEscolha from '../../components/BotaoEscolha'
import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';
import * as UserRepository from '../../api/UserRepository';

const menu = [
  {
    id: 1,
    title: 'Dados do Ativo',
    icon: <Entypo name="tools" size={64} color="white" />,
    route: 'ativo'
  },
  {
    id: 2,
    title: 'Diagnostico do Ativo',
    icon: <MaterialCommunityIcons name="toolbox" size={64} color="white" />,
    route: 'diagnostico'
  },
  {
    id: 3,
    title: 'Manutenção do Ativo',
    icon: <Ionicons name="settings" size={64} color="white" />,
    route: 'manutencao'
  },
  {
    id: 4,
    title: 'Histórico de Diagnósticos',
    icon: <MaterialIcons name="history" size={64} color="white" />,
    route: 'historicoDiagnosticos'
  }, 
  {
    id: 5,
    title: 'Histórico de Manutenções',
    icon: <Feather name="tool" size={64} color="white" />,
    route: 'historicoManutencoes'
  },
]

export default ({navigation, route}) => {

  return (
    <View style={styles.mainConteiner}>
      <Text style={styles.title}> O que deseja fazer com esse ativo? </Text>
      <FlatList 
        data={menu}
        renderItem = {({item}) => <BotaoEscolha title={item.title} icon={item.icon} onPress={() => navigation.navigate(item.route)} />}
        keyExtractor={(item) => item.id}
        />   
    </View>
  )
}

const styles = StyleSheet.create({
  mainConteiner:{
    alignItems: 'center',
    paddingBottom: 60,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#14487c',
    marginBottom: 20,
  }
})