const URL = 'https://keepcontrol-api.onrender.com'

const login = async (cpf, password) => {

  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({cpf, password})
  }

  const response = await fetch(`${URL}/login`, requestInit)

  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

export {
  login
}