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

            <div className="two-ebs-content">
                <h1>Parking & Check In</h1>
                <div className="two-ebs-checkin">
                    <div className="checkin-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Premium Parking within a short walk to the arena</p>
                    </div>
                    <a href="">View Parking Map</a>
                </div>
                <div className="two-ebs-checkin">
                    <div className="checkin-inner">
                        <FontAwesomeIcon icon={solid('square-phone')} />
                        <p>Easy check-in: Talk to the host at any suite level (level 4) entrance to check-in</p>
                    </div>
                    <a href="">View Check-in Locations</a>
                </div>
            </div>

            <div className="two-ebs-content-pu">
                <div className="two-ebs-pu-title">
                    <FontAwesomeIcon icon={solid('square-phone')} />
                    <h1>Possible Uses</h1>
                </div>
                <div className="two-ebs-pu-container">
                    <div className="two-ebs-pu">
                        <div className="pu-inner">
                            <h5>Business Development</h5>
                        </div>
                        <p>Client Entertainment</p>
                        <p>Relationship Development</p>
                        <p>Generate Referrals by Inviting Clients to Bring Colleagues & Friends</p>
                    </div>
                    <div className="two-ebs-pu">
                        <div className="pu-inner">
                            <h5>Client Retention</h5>
                        </div>
                        <p>Renew Accounts</p>
                        <p>Reduce Attrition</p>
                        <p>Relationship Development</p>
                        <p>Current Customer Upsell</p>
                        <p>New Product/Service Launch</p>
                    </div>
                    <div className="two-ebs-pu">
                        <div className="pu-inner">
                            <h5>Employee Usage</h5>
                        </div>
                        <p>Employee Recruitment & Retention</p>
                        <p>Employee Benefit Programs</p>
                        <p>Employee Incentives</p>
                        <p>Internal Contests</p>
                        <p>Team Building</p>
                        <p>Employee Families</p>
                        <p>Holiday Events/Parties</p>
                        <p>Conferences</p>
                    </div>
                    <div className="two-ebs-pu">
                        <div className="pu-inner">
                            <h5>Executive Utilization</h5>
                        </div>
                        <p>Executive Team Building</p>
                        <p>Quarterly Meetings</p>
                        <p>Investors & Shareholders</p>
                        <p>Personal Entertainment</p>
                    </div>
                    <div className="two-ebs-pu">
                        <div className="pu-inner">
                            <h5>Community Relations</h5>
                        </div>
                        <p>Complement Current Charitable Programs</p>
                        <p>Donate for Auctions or Raffles</p>
                        <p>Host 501(c)(3) Organizations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2EBS