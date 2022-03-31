import React, { useEffect } from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './InputForm.css'
// import { setEmail, setToken } from '../../redux/reducer'
import axios from 'axios'
import {loginRequest, profileRequest} from '../../services/apiRequest'

const InputForm = () => {
  // Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // State
  const token = useSelector((state) => state.user.token)
  const [tokenState, setTokenState] = useState('')
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  })

  //==========> FUNCTION <==========\\

  function handleInputChange(event) {
    const inputName = event.target.name
    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    })
  }

  function navigateTo(tokenState){
    if (tokenState !== undefined) {
      navigate('/profile')
    } else {
      navigate('/')
    }
  }

  async function login(e) {
    e.preventDefault()
    await loginRequest(userInputs)
    setTokenState(window.localStorage.getItem('authToken'))
    navigateTo(tokenState)
  }
  


  return (
    <main className="main bg-dark noTopMargin">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => login(e)}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
export default InputForm
