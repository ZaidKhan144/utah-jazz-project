import React from 'react'
import Section2PS from '../Section2PS'
import Section3PS from '../Section3PS'
import Section4PS from '../Section4PS'

import './Section1PS.scss'

const Section1PS = () => {
  return (
    <>
      <section id="one-ps">
      <div className="text-container">
        <h1>Premium Seating</h1>
        <h6>The best way to enjoy all the excitement</h6>
        <p>Whether you're entertaining business clients, 
        closing a major deal, or socializing with family 
        and friends, a luxury suite provides all the convenience, 
        comfort and service you desire. As the home of the Utah 
        Jazz and the country's most popular touring musical acts 
        and family shows, Vivint Arena is the place to meet, greet, 
        see and be seen in Utah.</p>
        <div className="intro-link">
          <a href="#footer">Contact Us</a>
        </div>
      </div>
    </section>
    <Section2PS />
    <Section3PS />
    <Section4PS />
    </>
  )
}

export default Section1PS