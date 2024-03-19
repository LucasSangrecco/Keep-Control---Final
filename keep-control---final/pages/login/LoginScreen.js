import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput,} from 'react-native'
import { Button } from 'react-native-paper'
import Logo from '../../assets/KeepControl.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as LoginApi from '../../api/LoginApi'
import * as UserRepository from '../../api/UserRepository';


export default ({ navigation, route }) => {
  const [cpf, setCpf] = useState('12345678901')
  const [password, setPassword] = useState('Upx1234*')
  const [showPassword, setShowPassword] = useState(false)

  const login = async () => {
    const user = await LoginApi.login(cpf, password);
    
    if (user) {
      await UserRepository.saveToken(`Bearer, ${user.token}`);
      await UserRepository.saveUser(user.userId);
      navigation.navigate('drawer')
    } else {
      alert('Usuário ou senha inválido')
    }
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        style={styles.cpf}
        placeholder="CPF"
        placeholderTextColor="#193073"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
          style={styles.senha}
          placeholder="Senha"
          placeholderTextColor="#193073"
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#193073"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <Button
        mode="contained"
        textColor="white"
        style={styles.botaoEntrar}
        onPress={login}>
        ENTRAR
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14487c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    margin: 60,
    width: 300,
    height: 150,
  },

  cpf: {
    marginBottom: 10,
    width: 300,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
  },

  passwordContainer: {
    width: 300,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  senha: {
    width: 266,
    height: 60,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 4,
    fontSize: 14,
  },

  icon: {
    marginRight: 10,
    borderWidthBottom: 2,
    borderBottomColor: 'black',
  },

  botaoEntrar: {
    backgroundColor: '#3d65d8',
    marginTop: 10,
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
  },

})
