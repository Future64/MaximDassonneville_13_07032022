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
    <a class="main-nav-item" href="/">
      <i class="fa fa-sign-out"></i>
      Sign Out
    </a>
  )
}
export default SignOut
