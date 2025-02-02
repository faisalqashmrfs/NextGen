import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import OurBlogs from '../components/OurBlogs/OurBlogs'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'



export default function BlogsPage() {
  return (
    <div>
        <NavBar/>
        <OurBlogs/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  )
}
