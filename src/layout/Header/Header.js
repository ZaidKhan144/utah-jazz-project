import React, { useState, useEffect } from 'react'

import './Header.scss'
import logo from '../../assets/images/logo.png'

const Header = () => {

  const [ headerColor, setHeaderColor ] = useState(false);

  const headerColorChange = () => {
    window.scrollY >= 80 ? setHeaderColor(true) : setHeaderColor(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange)
  }, [])

  return (
    <header id="header" className={ headerColor ? 'header-color' : null}>
        <div className="header-container">
            <div className="header-logo">
                <a href=""><img src={logo} alt="logo" />
                <span>Utah Jazz Premium Seating</span></a>
            </div>
            <div className="header-links-container">
                <a href="">Luxury Suites</a>
                <a href="">Exclusive Clubs</a>
                <a href="">Contact Us</a>
            </div>
        </div>
    </header>
  )
}

export default Header