import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Section2EBS.scss'


const Section2EBS = () => {
  return (
    <section id="two-ebs">
        <div className="two-ebs-container">
            <div className="two-ebs-content">
                <h1>About</h1>
                <div className="two-ebs-about">
                    <div className="about-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Location</p>
                    </div>
                    <p className='about-inner-text'>Suite Level (Level 4)</p>
                </div>
                <div className="two-ebs-about">
                    <div className="about-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Capacity</p>
                    </div>
                    <p className='about-inner-text'>Accommodates 18-32 people</p>
                </div>
                <div className="two-ebs-about">
                    <div className="about-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Event Availability</p>
                    </div>
                    <p className='about-inner-text'>Utah Jazz Games (including playoffs)</p>
                    <p className='about-inner-text'>Select Concerts and Events</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2EBS