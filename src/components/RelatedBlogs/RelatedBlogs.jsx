import React, { useState } from 'react'
import './RelatedBlogs.css'
import Tittel from '../Tittel/Tittel'
import OurBlogsCards from '../OurBlogsCards/OurBlogsCards'
export default function RelatedBlogs() {
   const [activeButton, setActiveButton] = useState('design');
  return (
    <div className='ourBlogs'>
        <div>
            <Tittel
                hiedText={true}
                ShowButtonIcon={true}
                TextHeading={"Related Blogs"}
                TextSpan={"ALL Testimonials"}
                backColor={"var(--secondary-color)"}
                />
            <OurBlogsCards activeTab={activeButton}/>
        </div>
                  
    </div>
  )
}
