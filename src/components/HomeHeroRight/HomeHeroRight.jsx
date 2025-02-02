import React from 'react'
import './HomeHeroRight.css'
import HeroImg2 from '../../assets/images/Button.svg'
function HomeHeroRight() {
    return (
        <div className='YT-HomeHeroRight'>
            <div className='YT-HomeHeroRightImages'>
                <img src={HeroImg2} alt=" Hero Image 2" />
            </div>
            <div className='YT-HomeHeroRightDesc'>
                <p>Estatein Real Estate</p>
                <p>Web Development. </p>
            </div>
        </div>
    )
}

export default HomeHeroRight
