import React from 'react';
import './team.css'
import { TeamMember } from '../../components';
import { johan, shan, marius } from './import.js';

const Team = () => {
    return (
        <div className='profata__team section__padding' id='team'>
            <div className='profata__team-heading'>
                <h1 className='gradient__text'>Meet the Team</h1>
            </div>
            <div className="profata__team-container">
                <TeamMember imgUrl={johan} name='Johan Sciard' title='CEO and Founder' link='https://www.linkedin.com/in/johan-sciard/' />
                <TeamMember imgUrl={shan} name='Shan Singh' title='CTO and Founder' link='https://www.linkedin.com/in/shantnus/' />
                <TeamMember imgUrl={marius} name='Marius Vergier' title='CCO and Founder' link='https://www.linkedin.com/in/marius-vergier/' />
            </div>
        </div>
    )
}

export default Team
