import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import.js';
import data from '../../assets/data_nobg.png';


const Blog = () => {
  return (
    <div className='profata__blog section__padding' id='blog'>
      <div className='profata__blog-heading'>
        <h1 className='gradient__text'>Get informed about your data. Read all about it here.</h1>
      </div>
      <div className="profata__blog-container">
        {/* <div className="profata__blog-container_groupA"> 
          <Article imgUrl={blog01} date='March 1st, 2024' title='How Big Tech is using your data'/>
        </div> */}
        <div className="profata__blog-container_groupB">
          <Article imgUrl={blog02} date='February 15th, 2024' title='Do you know how much your data is worth?' />
          <Article imgUrl={blog03} date='March 10th, 2024' title='How to request access to your data from companies?' />
          <Article imgUrl={blog04} date='February 2nd, 2024' title='Data Dividends: A new model of data empowerment.' />
          <Article imgUrl={blog05} date='January 27th, 2024' title='What data is being collected about you online?' />
        </div>
        <div className='profata__blog-image'>
          <img src={data} alt="face from data streams" />
        </div>
      </div>
    </div>
  )
}

export default Blog
