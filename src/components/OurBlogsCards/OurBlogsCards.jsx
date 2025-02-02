import React, { useState, useEffect } from 'react'
import './OurBlogsCards.css'
import arrow from '../../assets/images/arrow.svg'
import designData from '../../Data/OurBlogsCard'
import developmentData from '../../Data/developmentdata'
import downArrow from '../../assets/images/down-arrow.png'
import { Link } from 'react-router-dom'
import businessData from '../../Data/businessdata'
export default function OurBlogsCards({ activeTab }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showLastCard, setShowLastCard] = useState(false); 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);   
    };
    handleResize();  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);
  let orderedBlogs = [];
  if (activeTab === 'design') {
    orderedBlogs = designData;
  }
  else if (activeTab === 'development') {
    orderedBlogs = developmentData;  
  }
  else if (activeTab === 'business'){
    orderedBlogs = businessData;
  }
  return (
    <div className='mh-blogAllCards'>
      {orderedBlogs.map((blog, index) => (
        <Link to={'/BlogsOpenPage'}
          key={index}
          className={`mh-blogcard block ${isSmallScreen && index === orderedBlogs.length - 1 && !showLastCard ? 'hidden' : ''}`}
        >
          <div>
            <img src={blog.img} className='mh-blogphot' alt="" />
          </div>
          <div className='mh-cardblogtext'>
            <h4>{blog.heading}</h4>
            <p>{blog.paragraph}</p>
            <div className='mh-btnDiv'>
              <button className='mh-arrow'>
                <img src={arrow} alt="" />
              </button>
              <span>Read Full Blog</span>
            </div>
          </div>
        </Link>
      ))}
      {isSmallScreen && !showLastCard && (
        <button className='mh-hiddenbtn' onClick={() => setShowLastCard(true)}>
         <img src={downArrow} alt="" /> ALL BLOGS
        </button>
      )}
    </div>
  );
}

