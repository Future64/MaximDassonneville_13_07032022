import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName, setEmail, setToken, setConnecting } from '../../redux/reducer'
import './SignInBox.css'

const SignInBox = () => {
  const user = useSelector((state) => {return state})
  return (
    <a className="main-nav-item" 
      href={user.user.connecting === false 
        ? "/signin" 
        : "/profile"}>
          <i className="fa fa-user-circle"></i>
          {user.user.connecting === false 
            ? "Sign In" 
            : user.user.firstName}
   </a>
  )
}
export default SignInBox