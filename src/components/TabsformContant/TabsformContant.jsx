import ButtonTabs from "../ButtonTabs/ButtonTabs";
import "./TabsformContant.css";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ImgSrc from "../../assets/images/arrow.svg";
import { useState } from 'react'
import DataTabsformContant from '../../Data/DataTabsformContant'

export default function TabsformContant() {
  const [activetIndex, setActiveIndex] = useState(1);
  const handleButtonOnclick = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="hm-contanier-contactus">
        <div className="hm-contanier-contactus-button">
          {DataTabsformContant?.map((button, index) => (
            <ButtonTabs
              buttonStyle={'hm-tabbutton-form'} key={button.id}
              TextTabs={button.TextTabs}
              onClick={() =>
                handleButtonOnclick(index)
              }
              backtabsColor={activetIndex === index ? 'var(--orange-color)' : 'var( --border-color)'}
              colorFont={activetIndex === index ? 'var( --primary-color)' : 'var(--text-color)'
              }
            />
          )
          )}
        </div>

        <div className="hm-contatus-form">

          <div className="hm-button-form hm-button-form_1">
            <label> {DataTabsformContant[activetIndex].label} </label>
            <input
              type={DataTabsformContant[activetIndex].type}
              required
              placeholder={DataTabsformContant[activetIndex].placeholder}
              className="hm-form-input">
            </input>
            <ButtonIcon ImgSrc={ImgSrc} iconStyle={"Hm-form-icon"} />
          </div>
          <div className="hm-button-form hm-button-form_1">
            <label>{DataTabsformContant[activetIndex].label1} </label>
            <input
              type={DataTabsformContant[activetIndex].type}
              required
              placeholder={DataTabsformContant[activetIndex].placeholder1}
              className="hm-form-input">
            </input>
            <ButtonIcon ImgSrc={ImgSrc} iconStyle={"Hm-form-icon"} />
          </div>
          <div className="hm-button-form">
            <label>{DataTabsformContant[activetIndex].label2} </label>
            <input
              type={DataTabsformContant[activetIndex].type}
              required
              placeholder={DataTabsformContant[activetIndex].placeholder2}
              className="hm-form-input">
            </input>
            <ButtonIcon ImgSrc={ImgSrc} iconStyle={"Hm-form-icon"} />
          </div>
        </div>
      </div>
    </>
  );
}
