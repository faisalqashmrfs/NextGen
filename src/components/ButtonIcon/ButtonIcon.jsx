import './ButtonIcon.css'

export default function ButtonIcon({ImgSrc , onclick,iconStyle }) {
  return (
    <div >
      <button className={iconStyle} onClick= {onclick}  >
      <img src={ImgSrc} alt="titel" ></img>
    </button>
    </div>
  )
}
