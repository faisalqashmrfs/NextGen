/* eslint-disable react/prop-types */
import StoriesDiv from '../StoriesDiv/StoriesDiv'
import  './StoriesDivComponent.css'
import DataStoriesDiv from '../../Data/DataStoriesDiv'
export default function StoriesDivComponent({styleStoriesDiv}) {
  return (
    <>
    <div className={styleStoriesDiv}>
        {DataStoriesDiv ?.map((item)=>
        <StoriesDiv key={item.id}
        childtext={item.childtext}
        secondtext ={item.secondtext}
        />
        )
        }
    </div>
    </>
  )
}
