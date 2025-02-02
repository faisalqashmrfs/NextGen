import React from 'react'
import './OurWorksBodyCard.css'
import ImgeSrc from '../../assets/images/arrow.svg'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import StoriesDiv from '../StoriesDiv/StoriesDiv'



function OurWorksBodyCard({TextSpan,showdiv,textdesc,showdesc,stylestoirscard,childtext1,secondtext1,childtext2,secondtext2,Text ,Icon,TechnologiesUsed,TeamMembers,imgProgect }) {
    return (
        <div className='YT-OurWorksBodyCard block'>
            <div className='YT-OurWorksLeftCard'>
                <div className='hm-StoreCard-titel'>
                    <StoriesIcon Icon={Icon} 
                            ShowText={false}
                            ShowImg={false}
                            Text={Text} 
                            styleheading={'YT-heding'}
                            />
                    <ButtonTextandIcon  bttonandiconstyle={'YT-ButtonandText'} 
                    hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImgeSrc}
                        TextSpan={'Details'} 
                        ButtonText={'YT-ourservicestext'}
                        iconStyle={'YT-ourservicesButton'}
                        
                    />
                </div>
                {!showdiv && <StoriesDiv 
                    styleStoriesDiv={'YT-AboutLeftCard'}
                    StyleStoriesTextDiv={'YT-AboutLeftCardDiv'}
                    StyleStoriesText={'YT-AboutLeftCardDivText'}
                    childtext1={childtext1}
                    secondtext1={secondtext1}
                    childtext2={childtext2}
                    secondtext2={secondtext2}
                    /> }
                    {!showdesc&& <p className='YT-AboutLeftCardDesc'>{textdesc}</p>}
                    <ButtonTextandIcon  bttonandiconstyle={'YT-OurWorksLeftCardButton'} 
                        hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImgeSrc}
                        TextSpan={'Details'} 
                        ButtonText={'YT-OurWorksLeftCardButtonText'}
                        iconStyle={'YT-OurWorksLeftCardButtonicon'}
                        
                    />
            </div>
            <div className='YT-OurWorksCenterCard'>
                <img src={imgProgect} alt="" />
            </div>
            <div className='YT-OurWorksRightCard'>
                    <div className='YT-TechnologiesUsed'>
                        <h4>Technologies Used</h4>
                        <ul className='YT-TechnologiesUsedUL'>
                            {TechnologiesUsed.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='YT-TeamMembers'>
                        <h4>Team Members</h4>
                        <div className='YT-TeamMembersImages'>
                        {TeamMembers.map((item,index) => (
                                <div key={index}><img src={item.img} alt="Team Members image" /></div>
                            ))}
                        </div>
                        
                    </div>
                    <ButtonTextandIcon  bttonandiconstyle={'YT-OurWorksRightCardButton'} 
                    hiedText={false}
                        ShowButtonIcon={true}
                        ImgSrc={ImgeSrc}
                        TextSpan={'Book A Call'} 
                        ButtonText={'YT-OurWorksRightCardButtonText'}
                    />
            </div>
        </div>
    )
}

export default OurWorksBodyCard
