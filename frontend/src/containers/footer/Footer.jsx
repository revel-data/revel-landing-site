import React from 'react';
import './footer.css';
import logo from '../../assets/full_logo.png';

const Footer = () => {
  return (
    <div className='profata__footer section__padding'>
      <div className='profata__footer-heading'>
        <h1 className='gradient__text'>Be the first to take make your data work for you, not against you</h1>
      </div>
      <div className='profata__footer-button'>
        <p>Request Early Access</p>
      </div>

      <div className='profata__footer-links'>
        <div className='profata__footer-links_logo'>
          <img src={logo} alt="logo"/>
          <p>&copy;{new Date().getFullYear()} Profata. All Rights Reserved.</p>
        </div>
        <div className='profata__footer-links_div'>
          <h4>Links</h4>
          <p>Articles</p>
          <p>GDPR</p>
          <p>Contact</p>
        </div>
        <div className='profata__footer-links_div'>
          <h4>Profata</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='profata__footer-links_div'>
          <h4>Get in touch</h4>
          <p>07-00000000</p>
          <p>info@profata.tech</p>
          <p>Social Media</p>
        </div>
      </div>

      <div className='profata__footer-copyright'> 
        <p> &copy;{new Date().getFullYear()} Profata. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
