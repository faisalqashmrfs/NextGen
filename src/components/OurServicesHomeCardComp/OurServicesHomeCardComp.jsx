import React from 'react'
import { Link } from 'react-router-dom'
import StoriesTitel from '../StoriesTitel/StoriesTitel'
import './OurServicesHomeCardComp.css'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImgeSrc from '../../assets/images/arrow.svg'
function OurServicesHomeCardComp({TextSpan,Text,Icon,desc,price,OurServicesclass }) {
    return (
        <Link to={'/ServicesPage'} className={OurServicesclass}>
            <div className='hm-StoreCard-titel'>
                <StoriesIcon Icon={Icon} 
                        ShowText={false}
                        ShowImg={false}
                        Text={Text} 
                        styleheading={'hm-StoreCard-heading'} 
                        />
                <ButtonTextandIcon  bttonandiconstyle={'YT-ButtonandText'} 
                hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={ImgeSrc}
                    TextSpan={'Book A Call' } 
                    ButtonText={'YT-ourservicestext'}
                    iconStyle={'YT-ourservicesButton'}
                    
                />
            </div>
            <div className='YT-OurServicesDesc'>
                <p>{desc}</p>
                <p>Starts From {price}</p>
            </div>
            
            <ButtonTextandIcon  bttonandiconstyle={'YT-OurServices-Secound-Button'} 
                hiedText={false}
                    ShowButtonIcon={true}
                    ImgSrc={ImgeSrc}
                    TextSpan={'Book A Call'} 
                    ButtonText={'YT-ButtonText'}
                />
        </Link>
    )
}

export default OurServicesHomeCardComp
