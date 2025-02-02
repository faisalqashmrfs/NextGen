import React from 'react'
import './HeroLeftComponent.css'
import img from '../../assets/images/Button-1.svg'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import scroll from '../../Data/data'
function HeroLeftComponent({HeroTitle,HeroDesc,showDesc,showSlider,HeroLeft}) {
    return (
        <div className={HeroLeft}>
            <div className='YT-HeroLeftComponentTop'>
                    <div className='YT-HeroLeftComponentTitle'>
                        <h1>{HeroTitle}</h1>
                        <a><img src={img} alt=" start image" /></a>
                    </div>
                    
                {showDesc&&<p>{HeroDesc}</p>}
            </div>
            {showSlider&&<InfiniteScroll items={scroll.about}  InfinityStyle={'YT-HeroSlider'}/>}
        </div>
    )
}

export default HeroLeftComponent
