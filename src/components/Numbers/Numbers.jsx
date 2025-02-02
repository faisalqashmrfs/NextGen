import React from 'react'
import './Numbers.css'
import NumbersCopmonetnt from '../NumbersCopmonetnt/NumbersCopmonetnt'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'

import NumbersData from '../../Data/NumbersData';
function Numbers({CssSection,ButtonStyle,iconStyle,ButtonText,NumbersCopmonetntStyle,ImgSrc,TextSpan}) {
    return (
        <div className={CssSection}>
                {NumbersData?.map((e,index)=>{
                return(
                    <NumbersCopmonetnt key={index} title={e.title} number={e.number} NumbersCopmonetntStyle={NumbersCopmonetntStyle}/>
                )
            })}
            <div className={ButtonStyle}>
                <ButtonTextandIcon
                    hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={ImgSrc}
                    TextSpan={TextSpan}
                    bttonandiconstyle={'YT-bttonandiconstyle'}
                    iconStyle={iconStyle}
                    ButtonText={ButtonText}
                    />
            </div>
        </div>
    )
}

export default Numbers
