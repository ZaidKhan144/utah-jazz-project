import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Footer.scss'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer-container">
        <h1>Contact Us</h1>
        <div className="footer-content">
            <div className="footer-text">
                <div className="footer-links">
                    <FontAwesomeIcon icon={solid('square-phone')} />
                    <a href="tel:+801-325-2105">801-325-2105</a>
                </div>
                <div className="footer-links">
                    <FontAwesomeIcon icon={solid('envelope')} />
                    <a href="mailto:bizdev@utahjazz.com">bizdev@utahjazz.com</a>
                </div>
                <p>With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you're interested in and we can customize a package to fit your group and budget.</p>
            </div>
            {/* <div className="footer-form">
                <form>
                    <label>First Name &#42;
                        <input type="text" />
                    </label>
                    <label>Last Name &#42;
                        <input type="text" />
                    </label>
                    <label>Email Address &#42;
                        <input type="email" />
                    </label>
                    <label>Phone Number &#42;
                        <input type="tel" />
                    </label>
                    <label>What type of seating are you interested in?
                        <select>
                            <option defaultValue="select">Select...</option>
                        </select>
                    </label>
                    <label>Comments
                        <input type="text" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div> */}
        </div>
        </div>
    </footer>
  )
}

export default Footer