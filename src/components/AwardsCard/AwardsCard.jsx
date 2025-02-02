import "../AwardsCard/AwardsCard.css"
import Shape from "../../assets/images/Shape.svg"
function AwardsCard({date ,icon , tittle , text }) {
    return (
    <div className="LJ-cards">
        <div className="date-icon">
           
            <h4>
            <span>Date</span>
            <img src={Shape} alt=""/>
                {date} 
            </h4>
           <div className="watch">
                 <img src={icon} alt="" />
            </div>
        </div>
        <div className="text">
            <h2>{tittle}</h2>
            <p>{text}</p>
        </div>


    </div>

    )

}
export default AwardsCard;