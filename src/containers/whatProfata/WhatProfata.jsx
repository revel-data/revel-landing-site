import React from 'react';
import './whatprofata.css'
import { Feature } from '../../components';

const WhatProfata = () => {
  return (
    <div className='profata__whatprofata section__padding' id='whatprofata'>
      <div className='profata__whatprofata-feature'>
        <Feature title='What is Profata' text="Welcome to Profata, the cutting-edge data brokerage platform that redefines data sharing, transparency, and value for both users and businesses. With Profata, you have complete control and visibility over your personal data, ensuring that you decide how it's shared and for what purpose." />
      </div>
      <div className='profata__whatprofata-heading'>
        <h1 className='gradient__text'>Your Data. Your Control. Your Rewards.</h1>
        <p>Explore the Library</p>
      </div>
      <div className='profata__whatprofata-container'>
        <Feature title='Empowerment Exchange' text="Through Profata, individuals can selectively share their information with companies of their choice, receiving rewards in return. Share your data selectively and reap the rewards. Welcome to a new era of data empowerment."/>
        <Feature title='Ethical Data Commerce' text="At Profata, we believe in doing things differently, ensuring transparency, fairness, and user consent. Trust us to handle your data ethically, setting a new standard for integrity in the industry."/>
        <Feature title='Rewarding Transparency' text="Welcome to Profata, where transparency pays off. See how your data is used and get rewarded for it. Join us in creating a transparent and rewarding data ecosystem."/>
      </div>
    </div>
  )
}

export default WhatProfata
