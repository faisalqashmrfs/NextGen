import React from 'react'
import './ReasonsToChooseCards.css'
import ReasonsCardComponent from '../ReasonsCardComponent/ReasonsCardComponent'

function ReasonsToChooseCards({ReasonsToChooseCardData}) {
    return (
        <div className='YT-ReasonsToChooseCards block'>
        {ReasonsToChooseCardData?.map((e,index)=>{
            return(
                <ReasonsCardComponent key={index} title={e.title} desc={e.desc}  
                />
            )
        })}
        
    </div>
    )
}

export default ReasonsToChooseCards
