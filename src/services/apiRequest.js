import axios from 'axios'

const LOGIN_URL = 'http://localhost:3001/api/v1/user/login'
const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'

export const loginRequest = async(userInputs) => {
  await axios
  .post(LOGIN_URL, userInputs)
  .then((response) => {
    window.localStorage.setItem('authToken', JSON.stringify(response.data.body.token))
    axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.body.token
    return response
  })
  .catch((error) => error.response.data)
}

export const profileRequest = async() => {
  let data
  await axios
  .post(PROFILE_URL,
      {}
    )
    .then((response) => {
      console.log(response.data)
      data = response
      return data
  })
  .catch((error) => {
    console.log(error)
      return error
  })
}