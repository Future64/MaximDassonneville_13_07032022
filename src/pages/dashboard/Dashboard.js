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
import axios from 'axios'
import './Dashboard.css'
import { setFirstName, setLastName, setEmail, setToken } from '../../redux/reducer'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SignOut from '../../components/signOut/SignOut'
import HeadDashboard from '../../components/headDashboard/HeadDashboard'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
  const sign = true
  const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'
  const user = useSelector((state) => {return state})
  const dispatch = useDispatch()
  const [userResult, setUserResult] = useState()

  useEffect(async () => {
    await axios
    .post(PROFILE_URL,
        {}
      )
      .then((response) => {
        setUserResult(response)
        dispatch(setFirstName(response.data.body.firstName))
        dispatch(setLastName(response.data.body.lastName))
        dispatch(setEmail(response.data.body.email))
        return response
    })
    .catch((error) => {
      console.log(error)
        return error
    })
  },[])
  console.log(user)


  return (
    <div className="Dashboard">
      <Header sign={sign} />
      <main className="main bg-dark ">
        <HeadDashboard />
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Dashboard
