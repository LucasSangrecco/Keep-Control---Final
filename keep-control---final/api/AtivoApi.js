const URL = 'https://keepcontrol-api.onrender.com';
import * as UserRepository from './UserRepository';

const cadastroAtivo = async (name, numserie, manufacturer, tipo, model, department, manufacturingDate) => {  
  const token = await UserRepository.getToken();
  const userId = await UserRepository.getUser();

  const requestInit = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId, name, numserie, manufacturer, tipo, model, department, manufacturingDate})
  }

  const response = await fetch(`${URL}/register/ativo`, requestInit)

  if(response) {
    return await response.json();
  } else {
    return null
  }
}

const dadosAtivo = async (id) => {
  const token = await UserRepository.getToken();
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: token
    }
  }

  const response = await fetch(`${URL}/ativo/${id}`, requestInit)    
  if (response.ok) {
    const responseBody = await response.json();
    await UserRepository.saveAtivo(responseBody.data.result);
    return responseBody;
  } else {
    console.error('Error:', response.status, response.statusText);
    return null;
  }
}

export {
  cadastroAtivo,
  dadosAtivo
}