import { useState, useEffect, useContext, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import './HeadDashboard.css'

const HeadDashboard = () => {
  const [toggle, setToggle] = useState(false)

  const changeToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false)
  }

  const welcome = (
    <>
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button " onClick={changeToggle}>
        Edit Name
      </button>
    </>
  )

  const editZone = (
    <>
      <h1>Welcome back</h1>
      <input className="firstName input" type="text" placeholder="tony" />
      <input className="familyName input" type="text" placeholder="Jarvis" />
      <div className="buttonBox">
        <button className="save-button btn" onClick={changeToggle}>
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
