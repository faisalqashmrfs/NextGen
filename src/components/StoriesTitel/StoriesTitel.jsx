import './StoriesTitel.css'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
//import GhostSmile from "../../assets/images/Ghost-Smile.svg"
import ImgeSrc from '../../assets/images/arrow.svg'
export default function StoriesTitel({Text ,Icon,TextSpan,bttonandiconstyle,ShowButtonIcon} ) {
  return (
    <>
    <div className='hm-StoreCard-titel'>
      <StoriesIcon Icon={Icon} 
           ShowText={false}
           ShowImg={false}
          Text={Text}
          styleheading={'hm-StoreCard-heading'} 
         />
      <ButtonTextandIcon  bttonandiconstyle={'hm-StoreCard-titel-buuton'} 
        hiedText={false}
          ShowButtonIcon={false}
          ImgSrc={ImgeSrc}
          TextSpan={TextSpan} 
          ButtonText={'Hm-ButtonText'}
          iconStyle={'HM-button-icon'}
         
      />
    </div>
    </>
  )
}
