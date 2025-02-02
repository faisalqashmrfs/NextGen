import Tittel from '../Tittel/Tittel'
import './Question.css'
import ImageSrc from "../../assets/images/arrow.svg";
import FormQuestion from '../FormQuestion/FormQuestion';
import AccrodionQuestion from '../AccrodionQuestion/AccrodionQuestion';

export default function Question() {
  return (
    <>
    <div className='Hm-contanier-Question'>
      <div >
            <Tittel 
              hiedText={false}
              ShowButtonIcon={false}
              ImgSrc={ImageSrc}
              TextHeading={"Frequently Asked Questions"}
              TextSpan={"View All"}
            />
          </div>
          <div className="HM-Margin hm-question-content ">
            <AccrodionQuestion/>
          <FormQuestion />
        </div>
      </div>
    
    </>
  )
}
