import AwardsCard from "../AwardsCard/AwardsCard";
import { AwardsData } from "../../Data/AwardsData";
import "../AwardsSection/AwardsSection.css"
function AwardsSection () {
    return (
        <div className="Awards-Data">
            {AwardsData.map((element,index) =>{
                return(
                
                <AwardsCard key={index} date={element.date} icon={element.icon} tittle={element.tittle} text={element.text} />
            )})}
        </div>
    )

}
export default AwardsSection;