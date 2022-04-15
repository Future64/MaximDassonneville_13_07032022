import React from 'react'
import { useLocation} from 'react-router-dom'
import './Header.css'
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignOut from '../signOut/SignOut'
import SignInBox from '../signInBox/SignInBox'

const Header = () => {
  const location = useLocation()


  function displaySignInHeader(){
    if (location.pathname === "/profile"){
      return (
        <>
          <SignInBox /> 
          <SignOut />
        </> 
      )
    } else {
        return <SignInBox />
      }
    }
  
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
        {displaySignInHeader()}
      </div>
    </nav>
  )
}
export default Header
