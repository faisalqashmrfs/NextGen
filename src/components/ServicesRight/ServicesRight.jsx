import React from 'react'
import './ServicesRight.css'
import ProjectsRightImage from '../../assets/images/services-hero-img.png'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImageSrc from "../../assets/images/arrowblack.svg";
function ServicesRight() {
    return (
        
        <div className='YT-ServicesRight'>
            <div className='YT-ServicesRightContant'>
                <ButtonTextandIcon
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={ImageSrc}
                TextSpan={"View Blog"}
                bttonandiconstyle={'YT-bttonandiconstyle'}
                iconStyle={'YT-IconStyle'}
                ButtonText={'YT-Button-Text'}
                />
            <div className='YT-blur'>
                <p>Web Development. </p>
            </div>
        </div>

        </div>
        
    )
}

export default ServicesRight
