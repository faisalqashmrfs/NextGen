import React from 'react'
 import {BrilliantData} from '../../Data/InformationBrilliant'
 import "../BrilliantSection/BrilliantSection.css"
 import Tittel from '../Tittel/Tittel'
import arrow from "../../assets/images/arrow.svg"
 import BrilliantCards from '../BrilliantCards/BrilliantCards'
 const BrilliantSection=()=> {
     return (


<div className='layal'>
            <div>                   
         <Tittel
        hiedText={false}
        ShowButtonIcon={false}
         ImgSrc={arrow}
  TextHeading={"Meet the brilliant minds behind NexGen"}
           TextSpan={"ALL Members"}
           /> 
           </div>

        <div className='LJ-Brilliant'>      
            {BrilliantData.map((e,index) =>{
                  return (     
                         <BrilliantCards key={index}  name={e.name} work={e.work} image={e.image}/>
                
                  )
              })}     
           
      </div>
     

 </div>


     )
     }
    
 


 export default BrilliantSection;