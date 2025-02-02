import React from 'react'
import './CareersRight.css'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import DownArrow from '../../assets/images/down-arrow.svg'
function CareersRight() {
    return (
        <div className='YT-CareersRight'>
            <h3>At NexGen</h3>
            <p>We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. 
                Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. 
                We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.
            </p>
            <ButtonTextandIcon
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={DownArrow}
                TextSpan={'KNOW MORE'}
                bttonandiconstyle={'YT-bttonandiconstyle'}
                iconStyle={'YT-NumbersIconAbout'}
                ButtonText={'YT-NumbersSectionButtonText'}
            />
        </div>
    )
}

export default CareersRight
