import  './OurServicesServiesesCards.css'
import OurServicesCard from '../../Data/OurServicesCard';
import OurSeviecsPageServiesCard from '../OurSeviecsPageServiesCard/OurSeviecsPageServiesCard'
export default function OurServicesServiesesCards({OurServicesCardsFathers}) {
  return (
    <div className={OurServicesCardsFathers}>
    {OurServicesCard?.map((e,index)=>{
        return(
            <OurSeviecsPageServiesCard OurServicesclasscontainer={'hm-OurServicesCardcontainer'}  Text={e.title} Icon={e.img}
            desc={e.desc} price={e.price} 
            />
        )
    })}
    
</div>
  )
}
