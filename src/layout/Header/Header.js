import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import './Header.scss'
import logo from '../../assets/images/logo.png'

const Header = (props) => {

  const [ headerColor, setHeaderColor ] = useState(false);
  const [ isActive, setActive ] = useState(false);
  const [ headerEBSColor, setHeaderEBSColor ] = useState('')

  const location = useLocation();
  
  const headerColorChange = () => {
    window.scrollY >= 80 ? setHeaderColor(true) : setHeaderColor(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", headerColorChange)

    if (location.pathname === "/ebs") {
      setHeaderEBSColor('#010101')
    }

  }, [location])

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
    <header id="header" className={ headerColor ? 'header-color' : null} style= {{backgroundColor: headerEBSColor}}>
        <div className="header-container">
            <div className="header-logo">
                <Link to="/"><img src={logo} alt="logo" />
                {
                    !props.mobileWidth ? <span>Utah Jazz Premium Seating</span> : <span>Premium Seating</span>
                }
                </Link>
            </div>
            <div className={`header-links-container ${isActive ? 'change' : null}`} onClick={openHam}>
                <div className={`hamburger-menu ${isActive ? 'change' : null}`} onClick={openHam}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <div className="header-links">
                    <HashLink to="#four-ps" onClick={closeMenu}>Luxury Suites</HashLink>
                    <HashLink to="#ex-clubs" onClick={closeMenu}>Exclusive Clubs</HashLink>
                    <HashLink to="#footer" onClick={closeMenu}>Contact Us</HashLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
