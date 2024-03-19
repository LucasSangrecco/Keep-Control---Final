const URL = 'https://keepcontrol-api.onrender.com'
import * as UserRepository from './UserRepository'

const inserirManutencao = async (report) => {  

  const userId = await UserRepository.getUser();
  const ativoId = await UserRepository.getAtivoId();
  const token = await UserRepository.getToken();

  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({ativoId, userId, report})
  }
  
  const response = await fetch(`${URL}/register/manutencao`, requestInit)
    console.log('passei aqui')
  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

const buscarManutencao = async (id) => {
  const token = await UserRepository.getToken();
  const requestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
  }
  const response = await fetch(`${URL}/manutencao/${id}`, requestInit)    
  if(response) {
    const responseBody = await response.json()
    await UserRepository.saveManutencao(responseBody.data)
    return responseBody
  } else {
    return null
  }
}

export {
  inserirManutencao,
  buscarManutencao
}