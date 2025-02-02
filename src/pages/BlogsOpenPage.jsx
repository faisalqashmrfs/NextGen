import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import BigSectionBlogOpen from '../components/BigSectionBlogOpen/BigSectionBlogOpen'
import RelatedBlogs from '../components/RelatedBlogs/RelatedBlogs'
import Hero from '../components/Hero/Hero'


export default function BlogsOpenPage() {
  return (
    <div>
        <NavBar/>
        <Hero  HeroClass={'Hero'} OpenRight={true} HeroTitle={'Mastering the Art of Minimalistic Design'} showDesc={false} showSlider={false} HeroLeft={'YT-HeroLiftTow'}/>
        <BigSectionBlogOpen />
        <RelatedBlogs/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow}  InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  )
}
