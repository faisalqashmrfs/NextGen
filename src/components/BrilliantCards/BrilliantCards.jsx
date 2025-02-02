import React from 'react'
import "../BrilliantCards/brilliantCards.css"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedin from "../../assets/images/linkedin.svg"
const BrilliantCards = ({name, work ,image}) => {
  return (
    <div className='LJ-BrilliantCards'>
      
      <div className='LJ-BrilliantCards-Top'>
         <h1 className='LJ-h1'>{name}</h1>
         <h3 className='LJ-h3'>{work}</h3>
       </div>

       <div className='LJ-BrilliantCards-Bottom'>
              <div className='LJ-app'>
                  <button> <img src={facebook} alt="" /></button> 
                  <button> <img src={twitter} alt="" /></button> 
                  <button>   <img  src={linkedin} alt="" /></button> 
                </div>
          
        <div className='people'>
         <img src={image} alt='image'/>
         </div> 
       </div>



    </div>
  )
}
export default BrilliantCards;





