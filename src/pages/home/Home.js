
import React from 'react'
import { useState, useEffect, useContext, useRef, useMemo, useCallback } from 'react'
import { useParams, useLocation, useMatch} from 'react-router-dom'
import './Home.css'
import Header from '../../components/header/Header'
import Sectionhome from '../../components/sectionHome/SectionHome'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Sectionhome />
        <Footer />
    </div>
  )
}
export default Home