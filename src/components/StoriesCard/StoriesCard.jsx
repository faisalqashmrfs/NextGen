/* eslint-disable react/prop-types */
import'./StoriesCard.css'
import StoriesTitel from '../StoriesTitel/StoriesTitel'
import StoriesDiv from "../StoriesDiv/StoriesDiv"
export default function StoriesCard({TextSpan,showdiv,textdesc,showdesc,stylestoirscard,childtext1,secondtext1,childtext2,secondtext2,Text ,Icon }) {
  return (
    <>
    <div className ={stylestoirscard }>
      <StoriesTitel Text={Text}
       Icon={Icon}  TextSpan={TextSpan} 
       />

{!showdiv && <StoriesDiv 
      styleStoriesDiv={'hm-StoriesDivComponent'}
      childtext1={childtext1}
      secondtext1={secondtext1}
      childtext2={childtext2}
      secondtext2={secondtext2}
      StyleStoriesTextDiv={'hm-StoriesDiv'}
      StyleStoriesText={'hm-childtext'}
      /> }
      {!showdesc&& <p>{textdesc}</p>}
    </div>
    </>
  )
}
