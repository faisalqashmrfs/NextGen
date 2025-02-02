
import ServiesImgComponent from '../ServiesImgComponent/ServiesImgComponent'
import Tittel from '../Tittel/Tittel'
import './OurSeviecs.css'
import OurServicesServiesesCards from '../OurServicesServiesesCards/OurServicesServiesesCards'
export default function OurSeviecs() {
  return (
    <>
    <div className='Hm-ourServinces-component'>
          <div >
                  <Tittel
                    hiedText={false}
                    ShowButtonIcon={true}
                    TextHeading={"Our Services"}
                  />
                </div>
                
        <div className='hm-cards '>
          < OurServicesServiesesCards OurServicesCardsFathers={'hm-OurServicesCards'}/>
            <ServiesImgComponent/>
        </div>
        
      </div>
    </>
  )
}
