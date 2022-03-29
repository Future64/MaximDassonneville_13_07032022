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
import './Header.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignOut from '../signOut/SignOut'
import SignInBox from '../signInBox/SignInBox'

const Header = (props) => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>

        {props.sign !== undefined ? <SignOut /> : <SignInBox />}
      </div>
    </nav>
  )
}
export default Header
