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
  return (
    <a className="main-nav-item" href="/">
      <i className="fa fa-sign-out"></i>
      Sign Out
    </a>
  )
}
export default SignOut
