import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import './Section3PS.scss'

const Section3PS = () => {
  return (
    <section id="three-ps">
    <h1>Digital Tickets</h1>
        <div className="three-ps-container">
        
            <div className="three-ps-left">
                
                <p>All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.</p>
                <p>This move to digital-only has been made for several reasons:</p>
                <p>Helps to prevent fraudulent tickets from being circulated</p>
                    Increases safety and security by providing an easier way to track who's using tickets and entering the arena
                <p>Allows for a convenient transfer process—you can transfer your tickets with the touch of a button</p>
                    <p>- Helps to prevent fraudulent tickets from being circulated.</p>
                    <p>- Increases safety and security by providing an easier way to track who's using tickets and entering the arena.</p>
                    <p>- Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.</p>
                <p>If you have questions or concerns about digital tickets, please contact your account representative.</p>  
            </div>
            <div className="three-ps-right">
                <div className="video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/meGV_vYsjm0?rel=0" 
                        frameBorder="0" 
                        allowFullScreen="allowfullscreen" 
                        id="youtube-5611197">
                    </iframe>
                </div>
            </div>
        </div>
        <div className="tickets-link">
            <a href="">Learn more about digital tickets <FontAwesomeIcon icon={solid('caret-right')} /></a>
        </div>
    </section>
  )
}

export default Section3PS