import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch} from 'react-router-dom'
import './SignInBox.css'

const SignInBox = () => {
  return (
    <a className="main-nav-item" href="/signin">
      <i className="fa fa-user-circle"></i>
    Sign In
  </a>
  )
}
export default SignInBox