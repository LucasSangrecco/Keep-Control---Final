const URL = 'https://keepcontrol-api.onrender.com'
import * as UserRepository from './UserRepository';

const inserirDiagnostico = async (report, materials) => {  

  const userId = await UserRepository.getUser();
  const ativoId = await UserRepository.getAtivoId();
  const token = await UserRepository.getToken();

  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({ativoId, userId, report, materials})
  }

  const response = await fetch(`${URL}/register/diagnostico`, requestInit)

  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

const buscarDiagnostico = async (id) => {
  const token = await UserRepository.getToken();
  const requestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
  }

  const response = await fetch(`${URL}/diagnostico/${id}`, requestInit)    
  if(response) {
    const responseBody = await response.json();
    await UserRepository.saveDiagnostico(responseBody.data);
    return responseBody
  } else {
    return null
  }
}

export {
  inserirDiagnostico,
  buscarDiagnostico
}