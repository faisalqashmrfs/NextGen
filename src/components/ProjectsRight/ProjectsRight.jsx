import React from 'react'
import './ProjectsRight.css'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImageSrc from "../../assets/images/arrowblack.svg";
function ProjectsRight() {
    return (
        <div className='YT-ProjectsRight'>
            <div className='YT-ProjectsRightContant'>
                <div className='YT-blur'>
                    <p>Web Development. </p>
                </div>
                <ButtonTextandIcon
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={ImageSrc}
                TextSpan={"View Blog"}
                bttonandiconstyle={'YT-bttonandiconstyle'}
                iconStyle={'YT-IconStyle'}
                ButtonText={'YT-Button-Text'}
                />
            </div>
        </div>
    )
}

export default ProjectsRight
