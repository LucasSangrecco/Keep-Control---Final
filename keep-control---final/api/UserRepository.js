import AsyncStorage from '@react-native-async-storage/async-storage'

const save = async (data) => {
  const jsonValue = JSON.stringify(data.user)
  await AsyncStorage.setItem('@user', jsonValue)  
}

const find = async () => {
  const jsonValue = await AsyncStorage.getItem('@user')        
  return jsonValue ? JSON.parse(jsonValue) : null
}

const remove = async () => {
  await AsyncStorage.removeItem('@user')
}

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

const saveUser = async (userId) => {
  try {
    await AsyncStorage.setItem('userId', userId);
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getUser = async () => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    return userId;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

const saveAtivoId = async (ativoId) => {
  try {
    await AsyncStorage.setItem('ativoId', ativoId);
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getAtivoId = async () => {
  try {
    const ativoId = await AsyncStorage.getItem('ativoId');
    return ativoId;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

const saveAtivo = async (ativo) => {
  try {
    await AsyncStorage.setItem('ativo', JSON.stringify(ativo));
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getAtivo = async () => {
  try {
    const ativo = await AsyncStorage.getItem('ativo');
    return ativo;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

const saveDiagnostico = async (diagnostico) => {
  try {
    await AsyncStorage.setItem('diagnostico', JSON.stringify(diagnostico));
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getDiagnostico = async () => {
  try {
    const diagnostico = await AsyncStorage.getItem('diagnostico');
    return diagnostico;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

const saveManutencao = async (manutencao) => {
  try {
    await AsyncStorage.setItem('manutencao', JSON.stringify(manutencao));
  } catch (error) {
    console.error('Erro ao salvar o token:', error);
  }
};

const getManutencao= async () => {
  try {
    const manutencao = await AsyncStorage.getItem('manutencao');
    return manutencao;
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString(undefined, options);
}

export {
  save,
  find,
  remove,
  saveToken,
  getToken,
  saveUser,
  getUser,
  saveAtivoId,
  getAtivoId,
  saveAtivo,
  getAtivo,
  formatDate,
  saveDiagnostico,
  getDiagnostico,
  saveManutencao,
  getManutencao
}