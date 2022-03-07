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
        <a className="main-nav-item" href="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
        {props.sign !== undefined ? <SignOut /> : ''}
      </div>
    </nav>
  )
}
export default Header
