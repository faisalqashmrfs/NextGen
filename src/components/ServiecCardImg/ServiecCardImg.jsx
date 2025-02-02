import "./ServiecCardImg.css";
import ButtonTextandIcon from "../ButtonTextandIcon/ButtonTextandIcon";
import Arrow from "../../assets/images/arrowblack.svg";
import ImgSrc from "../../assets/images/arrow.svg";
export default function ServiecCardImg({img1,img2,textheading}) {
  return (
    <>
  
     <div className="hm-Container-img">
     <div className="hm-seviesTiteteel">
          <h3 className="hm-heading">{textheading}</h3>
          <ButtonTextandIcon
            hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImgSrc}
            TextSpan={"ViewAll"}
            bttonandiconstyle={"Hm-ButtonTextandIcon"}
            ButtonText={"Hm-ButtonText"}
            iconStyle={"HM-button-icon"}
          />
          </div >
          <div className="hm-seviesImg">
            <div className="hm-seviesImg1">
             <img src={img1} className="hm-mark"></img>
             <div className="hm-text">
             <ButtonTextandIcon
                bttonandiconstyle={"Hm-ButtonServies"}
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={Arrow}
                TextSpan={"Open Project"}
                ButtonText={"Hm-Servies-text"}
                iconStyle={"HM-button-img"}
              />
             </div>
            </div>
            <div className="hm-seviesImg1">
             <img src={img2} className="hm-mark"></img>
             <div className="hm-text">
             <ButtonTextandIcon
                bttonandiconstyle={"Hm-ButtonServies"}
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={Arrow}
                TextSpan={"Open Project"}
                ButtonText={"Hm-Servies-text"}
                iconStyle={"HM-button-img"}
              />
             </div>
            </div>
          </div>
     </div>  
 </>
  );
}
