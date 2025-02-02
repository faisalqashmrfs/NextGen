import React from 'react'
import './OurWorks.css'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import downarrow from "../../assets/images/down-arrow.svg";

import OurWorksBodyCard from '../OurWorksBodyCard/OurWorksBodyCard';
import TechnologiesUsed from '../../Data/Technologies Used'
import TeamMembers from '../../Data/TeamMembers'
import imgProgect1 from '../../assets/images/projects-image-1.png'
import imgProgect2 from '../../assets/images/projects-image-2.png'
import Icon1 from '../../assets/images/Magic-Stick.svg'
import Icon2 from '../../assets/images/Balloon.svg'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon';
function OurWorks() {
    return (
        <div className='YT-OurWorks block'>
            <Tittel
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={ImageSrc}
                TextHeading={"OUR WORKS"}
                TextSpan={"ALL WORKS"}
            />
            <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.one} TeamMembers={TeamMembers.one} imgProgect={imgProgect1}  Text={'Zenith Fitness App'}  showdesc={false} 
            textdesc={'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'} 
                    childtext1={'Category'} secondtext1={'Mobile App Development'} childtext2={'Time Taken'} Icon={Icon1}
                    secondtext2 ={'6 months'}  showdiv={false}/>
            <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.tow}  TeamMembers={TeamMembers.tow} imgProgect={imgProgect2}  Text={'A-Aura Ecommerce'}  showdesc={false} 
            textdesc={'A complete overhaul of a corporate website to enhance its brand identity and user experience.'} 
                    childtext1={'Category'} secondtext1={'Web Design & Development'} childtext2={'Time Taken'} Icon={Icon2}
                    secondtext2 ={'3 months'}  showdiv={false}/>
            <ButtonTextandIcon  bttonandiconstyle={'YT-OurWorksButton'} 
                hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={downarrow}
                    TextSpan={'ALL Works'} 
                    ButtonText={'YT-OurWorksButtonText'}
                    iconStyle={'YT-OurWorksButtonIcon'}
                />
        </div>
    )
}

export default OurWorks
