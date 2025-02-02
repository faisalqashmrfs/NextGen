/* eslint-disable react/prop-types */
import './ButtonTabs.css'

export default function ButtonTabs({ TextTabs, onClick, buttonStyle, backtabsColor, colorFont }) {
  return (
    <button onClick={onClick} className={buttonStyle} style={{ backgroundColor: backtabsColor, color: colorFont }}>
      {TextTabs}
    </button>
  )
}