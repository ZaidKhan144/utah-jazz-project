import React from 'react'
import { Link } from "react-router-dom";
import './Section4PS.scss'

import ebsl from '../../../assets/images/Premium_EBS4.jpg'
import udo from '../../../assets/images/Premium_UdoLounge1.jpg'
import loge from '../../../assets/images/Premium_LogeBox1.jpg'
import psSuite from '../../../assets/images/Premium_CourtsideSuite1.jpg'
import toyota from '../../../assets/images/Premium_ToyotaClub7.jpg'
import ebc from '../../../assets/images/Premium_EBC1.jpg'
import wcf from '../../../assets/images/Premium_WCF4.jpg'
import lexus from '../../../assets/images/Premium_Lexus2.jpg'
import courtside from '../../../assets/images/Premium_CourtsideClub26.jpg'
import legends from '../../../assets/images/Premium_Legends1.jpg'


const luxuryData = [
    {
        image: ebsl,
        title: 'Eide Bailly Suite Level'
    },
    {
        image: udo,
        title: 'Level 3 Udo Lounge'
    },
    {
        image: loge,
        title: 'Loge Boxes'
    },
    {
        image: psSuite,
        title: 'Courtside Suites'
    }
]

const exclusiveData = [
    {
        image: toyota,
        title: 'Toyota Club'
    },
    {
        image: ebc,
        title: 'Eide Bailly Club'
    },
    {
        image: wcf,
        title: 'WCF Insurance Club'
    },
    {
        image: lexus,
        title: 'Lexus Club'
    },
    {
        image: courtside,
        title: 'Courtside Club Presented By Entrata'
    },
    {
        image: legends,
        title: 'Legends Club Presented By Lgcy Power'
    }
]

const Section4PS = () => {
  return (
    <section id="four-ps">
        <div className="four-ps-container">
            <h1>Luxury Suites</h1>
            <div className="four-ps-card-container">
                {
                    luxuryData.map((item, index) => {
                        return (
                            <div className="four-ps-card-wrapper" key={index}>
                                <Link to="/ebs" className="four-ps-card">{item.title}
                                    <img src={item.image} alt={item.title} />
                                </Link>
                            </div>
                        )
                    })
                }                
            </div>
            <h1 id="ex-clubs">Exclusive Clubs</h1>
            <div className="four-ps-card-container">
                {
                    exclusiveData.map((item, index) => {
                        return (
                            <div className="four-ps-card-wrapper" key={index}>
                                <Link to="/ebs" className="four-ps-card">{item.title}
                                    <img src={item.image} alt={item.title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Section4PS