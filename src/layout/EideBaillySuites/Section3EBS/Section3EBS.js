import React from 'react'

import './Section3EBS.scss'

import EBS5 from '../../../assets/images/Premium_EBS5.jpg'

const Section3EBS = () =>{
  return (
    <section id="three-ebs">
        <div className="three-ebs-img">
            <img src={EBS5} alt="EBS5" />
            <div className="three-ebs-overlay">
                <div className="three-overlay-contaier">
                    <p>Tailor your food and beverage experience to your group each night. Choose from an expansive menu based on who you will be hosting for that event. Submit your food and beverage orders 2 business days prior to the event. Access to your suite and food service will start 90 minutes prior to tipoff</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3EBS