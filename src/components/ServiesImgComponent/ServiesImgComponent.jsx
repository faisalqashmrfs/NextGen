import  './ServiesImgComponent.css'
import DataOurServiesImg from '../../Data/DataOurServiesImg'
import ServiecCardImg from '../ServiecCardImg/ServiecCardImg'
export default function ServiesImgComponent() {
  return (
    <>
    <div className='hm-ServiesCom'>
    {DataOurServiesImg?.map((s)=>{
                return(
                    < ServiecCardImg key={s.id} textheading={s.textheading} img1={s.img1} img2={s.img2}
                    />
                )
            })}
    </div>
    </>
  )
}
