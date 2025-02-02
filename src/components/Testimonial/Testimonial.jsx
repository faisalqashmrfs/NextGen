import React from 'react'
import Cards from '../Cards/Cards'
import './Testimonial.css'
import TestimonialCardData from '../../Data/TestimonialCardData'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import downarrow from "../../assets/images/down-arrow.svg";
function Testimonial() {
    return (
        <div className='YT-Testimonial'>
            <Tittel
            hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImageSrc}
            TextHeading={"TESTIMONIALS"}
            TextSpan={"ALL TESTIMONIALS"}
            />
            <Cards TestimonialCardData={TestimonialCardData}/>
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

export default Testimonial
