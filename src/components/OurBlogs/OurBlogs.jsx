import React, { useState } from 'react'
import './ourBlogs.css'

import BlogsTittle from '../BlogsTittle/BlogsTittle'
export default function OurBlogs() {
    const [activeTab, setActiveTab] = useState('design');
  return (

    <>
<section className='ourBlogs'>
<div>
               <BlogsTittle setActiveTab={setActiveTab} />
    </div>
</section>
 
    
    
    </>
  )
}
