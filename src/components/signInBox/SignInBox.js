import React from 'react'
import { useSelector } from 'react-redux'
import './SignInBox.css'

const SignInBox = () => {
  const user = useSelector((state) => {return state})
  return (
    <a className="main-nav-item" 
      href={!window.localStorage.getItem('authToken')
        ? "/signin" 
        : "/profile"}>
          <i className="fa fa-user-circle"></i>
          {!window.localStorage.getItem('authToken') 
            ? "Sign In" 
            : user.user.firstName}
   </a>
  )
}
export default SignInBox