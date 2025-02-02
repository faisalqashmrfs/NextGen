import React, { useState } from 'react'
import './ProjectsShowcase.css'
import ImageSrc from "../../assets/images/arrow.svg";
import downarrow from "../../assets/images/down-arrow.svg";
import OurWorksBodyCard from '../OurWorksBodyCard/OurWorksBodyCard';
import TechnologiesUsed from '../../Data/Technologies Used'
import TeamMembers from '../../Data/TeamMembers'
import imgProgect1 from '../../assets/images/projects-image-1.png'
import imgProgect2 from '../../assets/images/projects-image-2.png'
import imgProgect3 from '../../assets/images/Bank.png'
import Icon1 from '../../assets/images/Magic-Stick.svg'
import Icon2 from '../../assets/images/Balloon.svg'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon';
import Tittel from '../Tittel/Tittel';
function ProjectsShowcase() {
    const[visibleComponent,setVisibleComponent] = useState(1);
    const [activeButton,setActiveButton]= useState(1);
    const handleButtonClick =(componentIndex) => {
        setVisibleComponent(componentIndex);
        setActiveButton(componentIndex);
    };
    return (
        <div className='YT-OurWorks'>
            <div className='YT-OurWorksTitle'>
                <h2>Projects Showcase</h2>
                <div  className='YT-OurWorksButtons'>
                    <button  onClick={() => handleButtonClick(1) } style={{backgroundColor:activeButton === 1 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 1 ? '#0F0F0F' : '#B3B3B2'}}>Web Design</button>
                    <button  onClick={() => handleButtonClick(2) }  style={{backgroundColor:activeButton === 2 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 2 ? '#0F0F0F' : '#B3B3B2'}}>Web Development</button>
                    <button  onClick={() => handleButtonClick(3) }  style={{backgroundColor:activeButton === 3 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 3 ? '#0F0F0F' : '#B3B3B2'}}>Marketing</button>
                </div>
            </div>
            <div  className='YT-OurWorksButtonsSmall'>
                    <button  onClick={() => handleButtonClick(1) } style={{backgroundColor:activeButton === 1 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 1 ? '#0F0F0F' : '#B3B3B2'}}>Web Design</button>
                    <button  onClick={() => handleButtonClick(2) }  style={{backgroundColor:activeButton === 2 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 2 ? '#0F0F0F' : '#B3B3B2'}}>Web Development</button>
                    <button  onClick={() => handleButtonClick(3) }  style={{backgroundColor:activeButton === 3 ? '#CE7D63' : '#1F1F1F' , color:activeButton === 3 ? '#0F0F0F' : '#B3B3B2'}}>Marketing</button>
            </div>
            {visibleComponent === 1 && (
                <>
                <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.one} TeamMembers={TeamMembers.one} imgProgect={imgProgect1}  Text={'Zenith Fitness App'}  showdesc={false} 
                    textdesc={'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'} 
                    childtext1={'Category'} secondtext1={'Mobile App Development'} childtext2={'Time Taken'} Icon={Icon1}
                    secondtext2 ={'6 months'}  showdiv={false}/>
                <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.tow}  TeamMembers={TeamMembers.tow} imgProgect={imgProgect2}  Text={'A-Aura Ecommerce'}  showdesc={false} 
                    textdesc={'A complete overhaul of a corporate website to enhance its brand identity and user experience.'} 
                    childtext1={'Category'} secondtext1={'Web Design & Development'} childtext2={'Time Taken'} Icon={Icon2}
                    secondtext2 ={'3 months'}  showdiv={false}/>
                </>
            )}
            {visibleComponent === 2 && (
                <>
                <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.one} TeamMembers={TeamMembers.one} imgProgect={imgProgect2}  Text={'Zenith Fitness App'}  showdesc={false} 
                    textdesc={'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'} 
                    childtext1={'Category'} secondtext1={'Mobile App Development'} childtext2={'Time Taken'} Icon={Icon1}
                    secondtext2 ={'6 months'}  showdiv={false}/>
                <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.tow}  TeamMembers={TeamMembers.one} imgProgect={imgProgect2}  Text={'Zenith Fitness App'}  showdesc={false} 
                    textdesc={'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'} 
                    childtext1={'Category'} secondtext1={'Mobile App Development'} childtext2={'Time Taken'} Icon={Icon2}
                    secondtext2 ={'6 months'}  showdiv={false}/>
                </>
            )}
            {visibleComponent === 3 && (
                <>
                    <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.one} TeamMembers={TeamMembers.one} imgProgect={imgProgect3}  Text={'Your Bank'}  showdesc={false} 
                    textdesc={'At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers needs.'} 
                    childtext1={'Category'} secondtext1={'Digital Marketing'} childtext2={'Time Taken'} Icon={Icon1}
                    secondtext2 ={'5 months'}  showdiv={false}/>
                    <OurWorksBodyCard TechnologiesUsed={TechnologiesUsed.tow}  TeamMembers={TeamMembers.tow} imgProgect={imgProgect3}  Text={'Your Bank'}  showdesc={false} 
                    textdesc={'At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers needs.'} 
                    childtext1={'Category'} secondtext1={'Digital Marketing'} childtext2={'Time Taken'} Icon={Icon2}
                    secondtext2 ={'5 months'}  showdiv={false}/>
                </>
            )}
            <ButtonTextandIcon  bttonandiconstyle={'YT-OurWorksButton'} 
                hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={downarrow}
                    TextSpan={'ALL Testimonials'} 
                    ButtonText={'YT-OurWorksButtonText'}
                    iconStyle={'YT-OurWorksButtonIcon'}
                />
        </div>
    )
}

export default ProjectsShowcase
