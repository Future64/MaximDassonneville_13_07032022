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
import './SignInPage.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import InputForm from '../../components/inputForm/InputForm'

const SignInPage = () => {
  return (
    <div className="signInPage">
      <Header />
      <InputForm />
      <Footer />
    </div>
  )
}
export default SignInPage
