import React from 'react'
import './KeyFeatures.css'
import KeyFeaturesdata from '../../Data/KeyFeaturesCardData'
import Tittel from '../Tittel/Tittel'
export default function KeyFeatures() {
  return (
    <div className='KEYSEC'>
        <Tittel
          hiedText={true}
          ShowButtonIcon={true}
          TextHeading={"KEY FEATURES OF OUR PROJECTS"}
          TextSpan={"ALL Testimonials"}
          backColor={"var(--secondary-color)"}
          />

        <div className='MA-KEYCARDS block1'>
          {KeyFeaturesdata.map((key,index) =>(
              <div className='MA-KEYCARD'>
                  <div className='MA-ICON'>
                    <img src={key.icon} alt="" />
                  </div>
                  <div className='MA-TEXT'>
                    <h3>{key.heading}</h3>
                    <p>{key.paragraph}</p>
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}
