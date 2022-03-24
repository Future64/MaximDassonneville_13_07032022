const LOGIN_URL = 'http://localhost:3001/api/v1/user/login'

export const loginRequest = (emailInputValue, passwordInputValue, remember) => {
  return axios
    .post(LOGIN_URL, {
      email: emailInputValue,
      password: passwordInputValue,
    })
    .then((response) => {
      if (response.data.body.token) {
        if (remember) {
          sessionStorage.setItem('jwtToken', response.data.body.token)
        }
        return response
      }
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data
      }
    })
}
