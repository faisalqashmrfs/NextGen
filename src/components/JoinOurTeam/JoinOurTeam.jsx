import React, { useEffect, useState } from 'react'
import './JoinOurTeam.css'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import JoinOurTeamCard from '../JoinOurTeamCard/JoinOurTeamCard';
import CareersCardData from '../../Data/CareersCardData'
import downArrow from '../../assets/images/down-arrow.png'
import { div } from 'framer-motion/client';
function JoinOurTeam() {
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
    <div className='MA-JoinOurTeam '>
      <Tittel
        hiedText={true}
        ShowButtonIcon={true}
        ImgSrc={ImageSrc}
        TextHeading={"Join Our Team at NexGen"}
        />
        <div className='MA-JoinOurTeamCardDiv '>
            {CareersCardData?.map((e, index) => {
            return (
              <div className={`MA-JoinOurTeamCard block1 ${isSmallScreen && index >=2 && !showLastCard ? 'hidden' : ''}`}>
                <JoinOurTeamCard 
                key={index}
                Text={e.Text}
                Icon={e.Icon}
                Salary={e.Salary}
                Experience={e.Experience}
                Deadline={e.Deadline}
                Desc={e.Desc}
              />
              </div>
              
            );
          })}
           {isSmallScreen && !showLastCard && (
                              <button className='mh-hiddenbtn' onClick={() => setShowLastCard(true)}>
                               <img src={downArrow} alt="" /> VIEW ALL
                              </button>)}
        </div>
    </div>
  )
}

export default JoinOurTeam
