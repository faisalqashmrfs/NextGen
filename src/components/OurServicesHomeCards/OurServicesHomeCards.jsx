import React from 'react'
import OurServicesHomeCardComp from '../OurServicesHomeCardComp/OurServicesHomeCardComp'
import './OurServicesHomeCards.css'
import OurServicesCard from '../../Data/OurServicesCard'
function OurServicesHomeCards({OurServicesCardsFather}) {
    return (
        <div className={OurServicesCardsFather}>
            {OurServicesCard?.map((e,index)=>{
                return(
                    <OurServicesHomeCardComp OurServicesclass={' YT-OurServicesCardLink'}  Text={e.title} Icon={e.img}
                    desc={e.desc} price={e.price} 
                    />
                )
            })}
            
        </div>
        
    )
}

export default OurServicesHomeCards
