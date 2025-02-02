
import './AccrodionQuestion.css'
import ButtonIcon from'../../components/ButtonIcon/ButtonIcon';
import { useState } from "react";
import zad from "../../assets/images/zad.svg";
import Naqs from "../../assets/images/naks.svg";
import questions from '../../Data/QuestionData';



function QuestionItem({ question, answer, isOpen, onChange }) {
  const Imgicon=isOpen ?Naqs  :zad
  return (
      <>
        <div className="hm-question-title">
        
          <button 
            onClick={() => {
             
              onChange();
            }}
          >
            {question}  <span><ButtonIcon  iconStyle={'HM-button-icon hm-toogel'} ImgSrc={Imgicon}/></span>
          </button>
          <div className={`hm-question-answer ${isOpen ? "show" : ""}`}>
            {answer}
        </div>   
      </div>
      </>
  );
}

export default function AccrodionQuestion() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="hm-Accrodion-Container">
      {questions.length === 0
        ? "empty"
        : questions.map((item, i) => (
            <QuestionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={index === i}
              onChange={() => {
                setIndex(index === i ? null :i );
              }}
            />
          ))}
    </div>
  );
}
