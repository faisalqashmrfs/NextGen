import SuccessStories from "../SuccessStories/SuccessStories";
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import './SuccessStoriesCompon.css'
import GhostSmile from '../../assets/images/Ghost-Smile.svg'
import hand from '../../assets/images/Hand-Heart.svg'
import downArrow from '../../assets/images/down-arrow.svg'
import ButtonTextandIcon from "../ButtonTextandIcon/ButtonTextandIcon";

export default function SuccessStoriesCompon() {
  return (
    <>
      <div className='Hm-contanier-Stories'>
        <div >
          <Tittel
            hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImageSrc}
            TextHeading={"Success Stories"}
            TextSpan={"View All"}
          />
        </div>
        
        <SuccessStories Text={'Klothink'} Icon={GhostSmile} TextSpan={'Visit Website'} 
        childtext1={'Industry'} secondtext1={'E-commerce'}childtext2={'Service Utilized'}
        secondtext2 ={'Design & Development'}  showdiv={false}/>
        
        <SuccessStories Text={'Fitness Tracker App'} Icon={hand} TextSpan={'Visit Website'} 
        childtext1={'Industry'} secondtext1={'Health & Fitness'}childtext2={'Service Utilized'}
        secondtext2 ={'Mobile App Development'} showdiv={false}/>
        <ButtonTextandIcon  bttonandiconstyle={'hm-SuccessStoriessButton'} 
                hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={downArrow}
                    TextSpan={'View All'} 
                    ButtonText={'hm-SuccessStoriessButtonText'}
                    iconStyle={'hm-SuccessStoriessButtonIcon'}
                />
      </div>
    </>
  );
}
