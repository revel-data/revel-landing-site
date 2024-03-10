import React from 'react';
import './teamMember.css';
import { SocialIcon } from 'react-social-icons'

const TeamMember = ({ imgUrl, name, title, link }) => (
  <div className='profata__teamMember-container_teamMember'>
    <div className="profata__teamMember-container_teamMember-image">
      <img src={imgUrl} alt="Team Member" />
    </div>
    <div className="profata__teamMember-container_teamMember-content">
      <div>
        <h3>{name}<br></br>{title}</h3>
      </div>
      <div className='team__member-social'>
        <span><a href={link} target="_blank" rel="noreferrer"><SocialIcon network='linkedin' style={{ height: 30, width: 30 }} /></a></span>
        <span><SocialIcon network="x" style={{ height: 30, width: 30 }}/></span>
        <span><SocialIcon network="discord" style={{ height: 30, width: 30 }}/></span>
      </div>
    </div>
  </div>
);

export default TeamMember;