import React from 'react'
import './Hero.css'
import HeroLeftComponent from '../HeroLeftComponent/HeroLeftComponent'
import Numbers from '../Numbers/Numbers'
import ImageSrc from "../../assets/images/arrow.svg";
import DownArrow from '../../assets/images/down-arrow.svg'
import CareersRight from '../CareersRight/CareersRight';
import BlogsOpenRight from '../BlogsOpenRight/BlogsOpenRight';
import HomeHeroRight from '../HomeHeroRight/HomeHeroRight';
import ServicesRight from '../ServicesRight/ServicesRight';
import ProjectsRight from '../ProjectsRight/ProjectsRight';
function Hero({show,HeroTitle,showDesc,showSlider,HeroDesc,showNumberAbout,HomeRight,CareerRight,OpenRight,showNumberContact,HeroLeft,Services,Projects,HeroClass}) {
    return (
        <>
        <div className={HeroClass}>
            <HeroLeftComponent HeroTitle={HeroTitle} showDesc={showDesc} showSlider={showSlider} HeroDesc={HeroDesc} HeroLeft={HeroLeft}/>
            
            {showNumberAbout&& <Numbers CssSection={'YT-NumbersSectionAbout'} ButtonStyle={'YT-NumbersSectionButtonAbout'} iconStyle={'YT-NumbersIconAbout'}
            ButtonText={'YT-NumbersSectionButtonText'} NumbersCopmonetntStyle={'YT-NumbersCopmonetntAbout'} ImgSrc={DownArrow} TextSpan={'KNOW MORE'}
            />}
            {showNumberContact&& <Numbers CssSection={'YT-NumbersSectionContact '} ButtonStyle={'YT-NumbersSectionButtonContact'} iconStyle={'YT-NumbersIconAbout'}
            ButtonText={'YT-NumbersSectionButtonText'} NumbersCopmonetntStyle={'YT-NumbersCopmonetnContact'} ImgSrc={DownArrow} TextSpan={'KNOW MORE'}
            />}
            {Services&&<ServicesRight/>}
            {HomeRight&& <HomeHeroRight/>}
            {CareerRight&&<CareersRight/> }
            {OpenRight&&<BlogsOpenRight/>  }
            {Projects&&<ProjectsRight/>  }
        </div>
            {show&& <Numbers CssSection={'YT-NumbersSection'} ButtonStyle={'YT-NumbersSectionButton'} iconStyle={'YT-NumbersSectionButtonIcon'}
            ButtonText={'YT-NumbersSectionButtonText'} NumbersCopmonetntStyle={'YT-NumbersCopmonetnt'} ImgSrc={ImageSrc} TextSpan={'KNOW MORE'}/>}
        </>
    )
}

export default Hero
