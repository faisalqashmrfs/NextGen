import './StoriesIcon.css'
export default function StoriesIcon({ShowImg,ShowText,styleheading ,Icon , Text}) {
  return (
    <div className='hm-StoreCard-titelandicon'>
        <div className='hm-StoreCard-icon'>
          {!ShowImg &&<img src={Icon}></img> }  
        </div>
        {!ShowText &&<h3 className={styleheading}> {Text}</h3> } 
      </div>
  )
}
