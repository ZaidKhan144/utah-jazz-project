import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import Section1PS from './layout/PremiumSeating/Section1PS';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Section1EBS from "./layout/EideBaillySuites/Section1EBS";
import ScrollToTop from "./ScrollToTop";

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
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Section1PS />}></Route>
            <Route path="/ebs" element={<Section1EBS />}></Route>
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
