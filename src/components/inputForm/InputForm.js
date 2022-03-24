import React from 'react'
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from 'react'
import {
  useParams,
  useLocation,
  useMatch,
  useHistory,
  useNavigate,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './InputForm.css'
import { setEmail, setToken } from '../../redux/reducer'
import axios from 'axios'

const InputForm = () => {
  const navigate = useNavigate()

  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const inputName = event.target.name

    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    })
  }



  async function login(e) {
    e.preventDefault()
    let res
    await axios.post('http://localhost:3001/api/v1/user/login', userInputs)
                                 .then(response => response.data.body.token)
                                 .then(token => {window.localStorage.setItem('authToken', token); res = true})    
                                 .catch(error => res = false) 
    if (res) {
      navigate("/profile")
    } else {
      navigate("/")
    }
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
