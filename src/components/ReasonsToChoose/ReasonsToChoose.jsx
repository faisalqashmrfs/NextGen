import React from 'react'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import './ReasonsToChoose.css'
import ReasonsToChooseCards from '../ReasonsToChooseCards/ReasonsToChooseCards';
import ReasonsToChooseCardData from '../../Data/ReasonsToChooseCardData';
function ReasonsToChoose() {
    return (
        <div className='YT-ReasonsToChoose'>
            <Tittel
            hiedText={true}
            ShowButtonIcon={true}
            ImgSrc={ImageSrc}
            TextHeading={"Reasons to Choose NexGen for Your Digital Journey"}
            />
            <ReasonsToChooseCards  ReasonsToChooseCardData={ReasonsToChooseCardData}/>
        </div>
    )
}

export default ReasonsToChoose
