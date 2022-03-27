import React from 'react'

import './Section2PS.scss'
import psSuite from '../../../assets/images/Premium_CourtsideSuite1.jpg'
import psClub from '../../../assets/images/Premium_CourtsideClub1.jpg'

const twoPSCardsData = [
    {
        image: psSuite,
        title: "Luxury Suites",
        text: "Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.",
        cta: "Learn more"
    },
    {
        image: psClub,
        title: "Exclusive Clubs",
        text: "Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena.",
        cta: "Learn more"
    }
]

let twoPSCards = twoPSCardsData.map((item, index) => {
    return (
        <div key={index} className="two-ps-card">
            <div className="two-ps-image" style={{backgroundImage: `url(${item.image})`}}></div>
            <div className="two-ps-text">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
            </div>
            <div className="two-ps-link">
                <a href="">{item.cta}</a>
            </div>    
        </div>
    )
})

const Section2PS = () => {
  return (
    <section id="two-ps">
        <div className="two-ps-container">
            <div className="two-ps-cards-container">
                {/* {twoPSCards} */}
            </div>
        </div>
    </section>
  )
}

export default Section2PS