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
import './InputForm.css'

const InputForm = () => {
  const navigate = useNavigate()
  const goDashboard = () => {
    let url = '/dashboard'
    navigate(url)
  }

  const checkInput = (e) => {
    console.log(e)
    console.log(e.target.value)
  }
  return (
    <main className="main bg-dark noTopMargin">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={goDashboard}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" onChange={checkInput}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={checkInput}/>
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
