import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/empower.png';

const Possibility = () => {
  return (
    <div className='profata__possibility section__padding' id='possibility'>
      <div className='profata__possibility-image'>
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className='profata__possibility-content'>
        <h4>Possibilities are endless</h4>
        <h1 className='gradient__text'>Break free from data shackles. choose control with Profata</h1>
        <p>We empower users to take control of their data and monetize it through our platform. With Profata, users choose what they share about themselves and gain data dividends.</p>
        <h4>Request Access Now</h4>
      </div>
    </div>
  )
}

export default Possibility
