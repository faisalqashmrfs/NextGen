import  './ButtonTextandIcon.css'
import ButtonIcon from"../ButtonIcon/ButtonIcon"
import { Link } from 'react-router-dom'
export default function ButtonTextandIcon({ShowButtonIcon, ImgSrc, bttonandiconstyle ,hiedText ,TextSpan ,ButtonText,iconStyle}) {
  return (
    <div >
      <Link className={bttonandiconstyle} >
      {!ShowButtonIcon && < ButtonIcon iconStyle={iconStyle} ImgSrc={ImgSrc} /> } 
      {!hiedText &&<span  className={ButtonText}>{TextSpan}</span>}
    </Link>
    </div>
  )
}