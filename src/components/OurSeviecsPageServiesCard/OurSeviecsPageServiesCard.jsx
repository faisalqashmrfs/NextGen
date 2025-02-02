import  './OurSeviecsPageServiesCard.css'
import './OurSeviecsPageServiesCard.css'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImgeSrc from '../../assets/images/arrow.svg'
export default function OurSeviecsPageServiesCard({Text,Icon,OurServicesclasscontainer,desc,price }) {
  return (
    <div className={OurServicesclasscontainer}>
    <div className='hm-StoreCard-titel'>
        <StoriesIcon Icon={Icon} 
                ShowText={false}
                ShowImg={false}
                Text={Text} 
                styleheading={'hm-srvesingheading'}
                />
        <ButtonTextandIcon  bttonandiconstyle={'hm-ButtonandText'} 
        hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImgeSrc}
            TextSpan={'Book A Call' } 
            ButtonText={'hm-ourservicestext'}
            iconStyle={'hm-ourservicesButton'}
            
        />
    </div>
    <div className='hm-OurServicesDesc'>
        <p>{desc}</p>
        <p>Starts From {price} </p>
    </div>
    
    <ButtonTextandIcon  bttonandiconstyle={'hm-OurServices-Secound-Button'} 
        hiedText={false}
            ShowButtonIcon={true}
            ImgSrc={ImgeSrc}
            TextSpan={'Book A Call'} 
            ButtonText={'hm-ButtonText'}

        />
  </div>
  )
}
