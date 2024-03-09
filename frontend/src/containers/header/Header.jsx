import React from 'react';
import people from '../../assets/people.png';
import face from '../../assets/databirds.png';
import './header.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';



const Header = () => {
  const [emails, setEmail] = useState({
    emails: ""
  });

  const navigate = useNavigate();
  
  const [emailCount, setEmailCount] = useState(0);

  useEffect(() => {
    async function getEmailCount() {
      try {
        const response = await axios.get('http://localhost:3000/count');
        setEmailCount(response.data.count);   
      } catch (error) {
        console.log(error);
      }
    }
    getEmailCount();
  }, []);

  const handleChange = (e) => {
    setEmail({
      ...emails,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = async (e) => {
    try {
      await axios.post("http://localhost:3000/emails", emails);
    } catch (error) {
      console.log(error)
    }
    navigate(0)
  };

  return (
    <div className='profata__header section__padding' id='home'>
      <div className='profata__header-content'>
        <h1 className='gradient__text'>Take control of your data and get rewards with Profata</h1>
        <p>Privacy empowered. Profit unlocked. Our platform transforms your data into dividends and rewards, giving you control and value. Your data, your earnings. Put your data to work for you and reap the benefits.</p>

        <div className="profata__header-content__input">
          <input
            type="text"
            placeholder="Your Email Address"
            onChange={handleChange}
            name='emails'
          />
          <button type="button" onClick={handleClick}>Get Started</button>
        </div>
        <div className="profata__header-content__people">
          <img src={people} alt="people" />
          <p >{emailCount} people already joined</p>
        </div>
      </div>

      <div className='profata__header-image'>
        <img src={face} alt="face from data streams" />
      </div>
    </div>
  )
}

export default Header
