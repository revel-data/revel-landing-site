import React from 'react';
import './article.css';


const Article = ({imgUrl, title, date}) => {
  return (
    <div className='profata__blog-container_article'>
      <div className="profata__blog-container_article-image">
        <img src={imgUrl} alt="Article"/>
      </div>
      <div className="profata__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article
