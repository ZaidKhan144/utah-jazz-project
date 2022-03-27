import React, { useState, useEffect } from "react";
import './App.scss';

import Section1PS from './layout/PremiumSeating/Section1PS';
import Section2PS from './layout/PremiumSeating/Section2PS';
import Section3PS from './layout/PremiumSeating/Section3PS';
import Section4PS from './layout/PremiumSeating/Section4PS';
import Footer from './layout/Footer';
import Header from './layout/Header';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [ mobileWidth, setMobileWidth ] = useState(window.innerWidth < 1025)

  const updateDimensions = () => {
    let mobileWidth = window.innerWidth < 1025
    setMobileWidth(mobileWidth)
  }

  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return (
    <div className="App">
      <Header mobileWidth={mobileWidth} />
      <main role="main">
        <Section1PS />
        <Section2PS />
        <Section3PS />
        <Section4PS />
      </main>
      <Footer />
    </div>
  );
}

export default App;
