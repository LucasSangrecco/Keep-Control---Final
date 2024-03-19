import React from 'react';
import { FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logo from './assets/KeepControl.png'

import LoginScreen from './pages/login/LoginScreen';
import HomeScreen from './pages/home/HomeScreen';
import AtivoScreen from './pages/ativo/AtivoScreen';
import DiagnosticoScreen from './pages/diagnostico/DiagnosticoScreen';
import EscolhaScreen from './pages/escolha/EscolhaScreen';
import ManutencaoScreen from './pages/manutencao/ManutencaoScreen';
import CadastroAtivoScreen from './pages/cadastroAtivo/CadastroAtivoScreen';
import HistoricoDiagnostico from './pages/historicoDeDiagnosticos/HistoricodeDiagnosticos';
import HistoricoManutencao from './pages/historicoDeManutencoes/HistoricoDeManutencoes';
import DiagnosticoAntigo from './pages/diagnosticoAntigo/DiagnosticoAntigo'
import ManutencaoAntiga from  './pages/manutencaoAntiga/ManutencaoAntiga'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: {
          backgroundColor: '#14487c',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      
      <Drawer.Screen 
        name="home" 
        component={HomeScreen} 
        options={homeOptions} 
      />
      <Drawer.Screen
        name="cadastroAtivo"
        component={CadastroAtivoScreen}
        options={cadastroAtivoOptions}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#14487c',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={loginOptions}
        />
        <Stack.Screen
          name="drawer"
          component={DrawerMenu}
          options={drawerOptions}
        />
        <Stack.Screen
          name="ativo"
          component={AtivoScreen}
          options={ativoOptions}
        />
        <Stack.Screen
          name="escolha"
          component={EscolhaScreen}
          options={escolhaOptions}
        />
        <Stack.Screen
          name="diagnostico"
          component={DiagnosticoScreen}
          options={diagnosticoOptions}
        />
        <Stack.Screen
          name="manutencao"
          component={ManutencaoScreen}
          options={manutencaoOptions}
        />
        <Stack.Screen
          name="historicoDiagnosticos"
          component={HistoricoDiagnostico}
          options={historicoDiagnosticoOptions}
        />
        <Stack.Screen
          name="historicoManutencoes"
          component={HistoricoManutencao}
          options={historicoManutencaoOptions}
        />
        <Stack.Screen
          name="manutencaoAntiga"
          component={ManutencaoAntiga}
          options={manutencaoAntigaOptions}
        />
        <Stack.Screen
          name="diagnosticoAntigo"
          component={DiagnosticoAntigo}
          options={diagnosticoAntigoOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loginOptions = {
  headerShown: false,
};

const drawerOptions = {
  headerShown: false,
};

const homeOptions = {
  title: 'Buscar ID',
};

const ativoOptions = {
  title: 'Ativo',
};

const diagnosticoOptions = {
  title: 'Diagnósticos',
};

const manutencaoOptions = {
  title: 'Manutenção',
};

const escolhaOptions = {
  title: 'Escolha',
};

const cadastroAtivoOptions = {
  title: 'Cadastro de Ativos',
};

const historicoDiagnosticoOptions = {
  title: 'Histórico de Diagnostico',
};

const historicoManutencaoOptions = {
  title: 'Histórico de Manutenção',
};

const diagnosticoAntigoOptions = {
  title: 'Diagnostico',
};

const manutencaoAntigaOptions = {
  title: 'Manutenção',
};

