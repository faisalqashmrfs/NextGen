import React, { useEffect, useState } from 'react'
import achievements from '../../Data/OurAchievment'
import './OurAchievments.css'
import Tittel from '../Tittel/Tittel'
import downArrow from '../../assets/images/down-arrow.png'
export default function OurAchievments() {
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
  return (
    
    <div className='MH-SECTION'>
        <Tittel
            hiedText={false}
            ShowButtonIcon={true}
            TextHeading={"OUR ACHIEVMENTS"}
        />
        <div className='MH-ALLACHIEV'>
        {achievements.map((card,index) =>(
            <div className={`MH-ACHIEVCARD block ${isSmallScreen && index === achievements.length - 1 && !showLastCard ? 'hidden' : ''}`}>
                <div className='MH-SPAN'>
                <span>{card.date}</span>
                </div>
            
            <div className='MH-HEADING'>
                <h3>{card.heading}</h3>
            </div>
            <p>{card.para}</p>
            </div>
            ))}
             {isSmallScreen && !showLastCard && (
                    <button className='mh-hiddenbtn' onClick={() => setShowLastCard(true)}>
                     <img src={downArrow} alt="" /> ALL BLOGS
                    </button>)}
        </div>

       

    </div>
  )
}

