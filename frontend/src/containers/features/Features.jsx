import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData =[
  {
    title: 'Earn Rewards',
    text: 'Get cash back and other rewards just for sharing select data and insights about yourself. The more you share, the more you earn through our data dividend model.'
  },
  {
    title: 'Insights Library',
    text: 'Access your personalized insights library to learn about yourself and how your habits and preferences compare to others with similar demographics. Continually updated based on your sharing preferences.'
  },
  {
    title: 'Personalized Offers',
    text: 'Get matched to offers, deals, and promotions from brands you love based on your interests. Get more relevant opportunities while being in control of how your data is used.'
  },
  {
    title: 'Transparent Data Fusion ',
    text: 'See how your anonymized data is used today and control how it can be used in the future. Our transparent data fusion allows you to monitor and manage your data sharing preferences.'
  }
]

const Features = () => {
  return (
    <div className='profata__features section__padding' id='features'>
      <div className='profata__features-heading'>
        <h1 className='gradient__text'>Discover the Power of Your Data: Sign Up Now to Control Your Information and Earn Exciting Rewards!</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="profata__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index}/>
      ))}
      </div>
    </div>
  )
}

export default Features
