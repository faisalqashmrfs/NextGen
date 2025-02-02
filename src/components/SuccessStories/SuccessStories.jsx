import './SuccessStories.css'

import StoriesCard from '../StoriesCard/StoriesCard';
import TabsTitel from '../TabsTitel/TabsTitel';
export default function SuccessStories({Text,Icon,childtext1,secondtext1,childtext2,secondtext2,TextSpan} ) {
  return (
    <>
              <div className="HM-Margin hm-Stories-content block">
              <StoriesCard stylestoirscard={'hm-StoriesCard'}
              ShowDesc={true} Text={Text}
              Icon={Icon}    childtext1={childtext1}
              secondtext1={secondtext1}
              childtext2={childtext2}
              secondtext2={secondtext2} TextSpan={TextSpan} 
              />
                <TabsTitel/>
            </div>
    </>
  )
}
