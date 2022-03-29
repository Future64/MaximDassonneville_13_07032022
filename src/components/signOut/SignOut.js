import React from 'react'
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from 'react'
import { useParams, useLocation, useMatch } from 'react-router-dom'
import './SignOut.css'

const SignOut = () => {
  const token = localStorage.getItem('authToken')
  const deleteStorage = () => {
    localStorage.clear()
  }
  return (
    <a className="main-nav-item" href="/" onClick={deleteStorage}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </a>
  )
}
export default SignOut
