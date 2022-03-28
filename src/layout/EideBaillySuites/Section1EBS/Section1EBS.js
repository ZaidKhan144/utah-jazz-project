import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './Section1EBS.scss'
import Section2EBS from '../Section2EBS';
import Section3EBS from '../Section3EBS';
import Section3PS from '../../PremiumSeating/Section3PS'

import EBS2 from '../../../assets/images/Premium_EBS2.jpg'
import EBS4 from '../../../assets/images/Premium_EBS4.jpg'

const Section1EBS = () => {
  return (
    <>
        <section id="one-ebs">
            <div className="banner-container">
                <div className="banner">
                    <h1>Eide Bailly Suite Level</h1>
                    <div className="banner-links">
                        <a href=""><FontAwesomeIcon icon={solid('square-phone')} />Download Info</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <Splide options={ {
                    rewind: true,
                    height: '45vw',
                }}>
                    <SplideSlide>
                        <img className='ebs-carousel' src={EBS2} alt="EBS2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img className='ebs-carousel' src={EBS4} alt="EBS4" />
                    </SplideSlide>
                </Splide>
            </div>
            <div className="noti">
                <div className="noti-container">
                    <FontAwesomeIcon icon={solid('info-circle')} />
                    <p>Did you know? Whether you're closing an important business deal or celebrating with your employees, renting a suite for a Jazz game is perfect for any occasion. Call or text <a href="tel:+801-325-2105">801-325-2105</a> to learn more.</p>
                </div>
            </div>
        </section>
        <Section2EBS />
        <Section3EBS />
        <Section3PS />
    </>
  )
}

export default Section1EBS