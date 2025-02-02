import './TabsTitel.css'
import TabsButtonTittel from '../../Data/TabsButtonTittel'
import { useState } from 'react'

import ButtonTabs from '../ButtonTabs/ButtonTabs';

export default function TabsTitel() {
  const [activetIndex, setActiveIndex] = useState(1);
  const handleButtonOnclick = (index) => {
    setActiveIndex(index);
  }

  return (
    <>
      <div className='hm-Container'>
        <div className='hm-tabsbutton'>
          {TabsButtonTittel?.map((button, index) => (
            <ButtonTabs
              buttonStyle={'hm-tabbutton'} key={button.id}
              TextTabs={button.TextTabs}
              onClick={() =>
                handleButtonOnclick(index)
              }
              backtabsColor={activetIndex === index ? 'var(--orange-color)' : 'var( --border-color)'}
              colorFont={activetIndex === index ? 'var(  --primary-color)' : 'var(--text-color)'
              }
            />
          )
          )}
        </div>
        <div className='hm-tabscontanier'>
          <h2 >{TabsButtonTittel[activetIndex].titelTabs}</h2>
          <p >{TabsButtonTittel[activetIndex].contentTabs}</p>
        </div>
      </div>
    </>
  )
}
