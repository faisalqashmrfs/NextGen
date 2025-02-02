import React, { useEffect, useState } from 'react'
import downArrow from '../../assets/images/down-arrow.png'
import Tittel from '../Tittel/Tittel'
import howto from '../../Data/howToApply.jsx'
import './HowToApply.css'
export default function HowToApply() {
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
    <div className='MH-SECTIO'>
        <Tittel 
            hiedText={false}
            ShowButtonIcon={true}
            TextHeading={"HOW TO APPLY"}
        />
        <div className='MH-ALLHOW'>
        
            {howto.map((card,index) =>(
                <div className={`MH-HOWCARD block ${isSmallScreen && index >=3 && !showLastCard ? 'hidden' : ''}`}>
                    <div className='MH-SPAN'>
                        <span>{card.step}</span>
                    </div>
                
                    <div className='MH-HEADING'>
                        <h3>{card.heading}</h3>
                    </div>
                    <div className='MH-PARA'>
                        <p>{card.PARA}</p>
                        <button className='MH-BUT'>
                            <img src={downArrow} alt="" /> KNOW MORE
                        </button>
                    </div>
                </div>
                ))}
                
             {isSmallScreen && !showLastCard && (
                    <button className='mh-hiddenbtn' onClick={() => setShowLastCard(true)}>
                     <img src={downArrow} alt="" /> ALL STEPS
                    </button>)}
        </div>
    </div>
  )
}
