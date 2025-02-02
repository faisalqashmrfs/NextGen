import Tittel from "../Tittel/Tittel";
import AwardsSection from "../AwardsSection/AwardsSection";
import "../Award/Award.css"
function Award () {
    return(
        <div className="LJ-Awards">
        <Tittel
         hiedText={true}
        ShowButtonIcon={true}
        TextHeading={"Awards & Recognitions"}
        />
        <AwardsSection />

        </div>

    )


}
export  default Award;