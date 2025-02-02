import './JoinOurTeamCard.css'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ImageSrc from "../../assets/images/arrow.svg";
import shape from '../../assets/images/Shape.svg'
function JoinOurTeamCard({Desc,Icon,Text,Salary,Experience,Deadline}) {
    return (
        <div>
            <div className='hm-StoreCard-titel'>
                    <StoriesIcon Icon={Icon} 
                        ShowText={false}
                        ShowImg={false}
                        Text={Text} 
                        styleheading={'MA-heding'}
                        />
                    <ButtonTextandIcon  bttonandiconstyle={'YT-ButtonandText'} 
                    hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImageSrc}
                        TextSpan={'View Details'} 
                        ButtonText={'MA-text'}
                        iconStyle={'MA-ButtonIcon'}
                        
                    />
            </div>
            <div className="MA-Content-Styling-container">
                    <div className="MA-Content-Styling">
                        <p>Salary</p>
                        <span><img src={shape} alt="circle shape" /></span>
                        <p>{Salary}</p>
                    </div>
                    <div className="MA-Content-Styling">
                        <p>Experience</p>
                        <span><img src={shape} alt="circle shape" /></span>
                        <p>{Experience}</p>
                    </div>
                    <div className="MA-Content-Styling">
                        <p>Deadline</p>
                        <span><img src={shape} alt="circle shape" /></span>
                        <p>{Deadline}</p>
                    </div>
            </div>
                <div className="MA-Card-Third-Section">
                    <p>Skills</p>
                    <p>{Desc}</p>
                </div>
                <ButtonTextandIcon  bttonandiconstyle={'MA-SecoundButton'} 
                    hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImageSrc}
                        TextSpan={'View Details'} 
                        ButtonText={'MA-text'}
                        iconStyle={'MA-ButtonIcon'}
                        
                    />
                <div className='MA-OrangButton'>
                    <ButtonTextandIcon  
                        hiedText={false}
                        ShowButtonIcon={true}
                        ImgSrc={ImageSrc}
                        TextSpan={'Apply NoW'} 
                        ButtonText={'MA-OrangButtonText'}
                        iconStyle={'MA-ButtonIcon'}
                        
                    />
                </div>
        </div>
    )
}

export default JoinOurTeamCard
