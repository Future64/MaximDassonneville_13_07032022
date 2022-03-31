import axios from 'axios'

const LOGIN_URL = 'http://localhost:3001/api/v1/user/login'
const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'

export const loginRequest = async(userInputs) => {
  await axios
  .post(LOGIN_URL, userInputs)
  .then((response) => {
    window.localStorage.setItem('authToken', JSON.stringify(response.data.body.token))
    console.log(response)
    return response
  })
  .catch((error) => error.response.data)
}

export const profileRequest = async(token) => {
  await axios
  .post(PROFILE_URL,
      {},
      {
        headers: {
            Authorization: `Bearer ` + token,
        },
      }
    )
    .then((response) => {
      console.log(response)
      return response
  })
  .catch((error) => {
      return error.response
  })
}