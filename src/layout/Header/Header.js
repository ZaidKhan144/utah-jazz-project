import React, { useState, useEffect, useRef } from 'react'

import './Header.scss'
import logo from '../../assets/images/logo.png'

const Header = (props) => {

  const [ headerColor, setHeaderColor ] = useState(false);
  const [isActive, setActive] = useState(false);

  const headerColorChange = () => {
    window.scrollY >= 80 ? setHeaderColor(true) : setHeaderColor(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange)
  }, [])

  const openHam = () => {

    const toggleClass = () => {
        setActive(!isActive)
    }
    toggleClass()
  }

  const closeMenu = () => {
    setActive(false)
  }

  return (
    <header id="header" className={ headerColor ? 'header-color' : null}>
        <div className="header-container">
            <div className="header-logo">
                <a href=""><img src={logo} alt="logo" />
                {
                    !props.mobileWidth ? <span>Utah Jazz Premium Seating</span> : <span>Premium Seating</span>
                }
                </a>
            </div>
            <div className={`header-links-container ${isActive ? 'change' : null}`} onClick={openHam}>
                <div className={`hamburger-menu ${isActive ? 'change' : null}`} onClick={openHam}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className="header-links">
                    <a href="" onClick={() => closeMenu()}>Luxury Suites</a>
                    <a href="" onClick={() => closeMenu()}>Exclusive Clubs</a>
                    <a href="" onClick={() => closeMenu()}>Contact Us</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
