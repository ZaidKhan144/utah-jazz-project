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
                    <a href="">View Arena Map</a>
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
                    <p className='about-inner-text'>Concerts and select special events</p>
                </div>
            </div>

            <div className="two-ebs-content">
                <h1>Benefits & Amenities</h1>
                <div className="two-ebs-benefits">
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Private Suite</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>420-490 square feet depending on the location</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Lounge seating area for four with coffee table at the back of suite</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>High-top counter in middle, and drink rails at the back of the fixed-seating area</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Dedicated suite attendant for each game and arena event</p>
                    </div>
                </div>
                <div className="two-ebs-benefits">
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Flat screen TV in each suite</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>WiFi access</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>18-32 tickets in a luxury suite (varies by location)</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>VIP parking passes</p>
                    </div>
                    <div className="benefits-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Food credit for catering to both Utah Jazz games and arena events</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Section2EBS