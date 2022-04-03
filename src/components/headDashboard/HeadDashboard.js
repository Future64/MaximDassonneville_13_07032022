import { useState, useEffect, useContext, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName, setLastName, setEmail, setToken } from '../../redux/reducer'
import './HeadDashboard.css'

const HeadDashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {return state})
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false)
  }

  const changeName = () => {
    const inputFirstName = document.querySelector(".firstName").value
    const inputFamilyName = document.querySelector(".familyName").value
    dispatch(setFirstName(inputFirstName))
    dispatch(setLastName(inputFamilyName))
    changeToggle()
  }

  const welcome = (
    <>
      <h1>
        Welcome back
        <br />
        {user !== undefined ? `${user.user.firstName} ${user.user.lastName}` : "Tony Jarvis!"}
      </h1>
      <button className="edit-button " onClick={changeToggle}>
        Edit Name
      </button>
    </>
  )

  const editZone = (
    <>
      <h1>Welcome back</h1>
      <input className="firstName input" type="text" name="firstName" placeholder="tony" />
      <input className="familyName input" type="text" name="familyName" placeholder="Jarvis" />
      <div className="buttonBox">
        <button className="save-button btn" onClick={changeName}>
          Save
        </button>
        <button className="cancel-button btn" onClick={changeToggle}>
          Cancel
        </button>
      </div>
    </>
  )

  return <div className="header">{toggle == false ? welcome : editZone}</div>
}

export default HeadDashboard
