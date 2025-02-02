/* eslint-disable no-unused-vars */
import React from 'react'

import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import SuccessStoriesCompon from '../components/SuccessStoriesCompon/SuccessStoriesCompon'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import Question from '../components/Question/Question'
import OurSeviecs from '../components/OurSeviecs/OurSeviecs'
import Hero from '../components/Hero/Hero'
export default function ServicesPage() {
return (
  <div>  
        <NavBar />
        <Hero  HeroClass={'Hero'} Services={true} HeroTitle={'Our Comprehensive Digital Solutions'} showDesc={true} showSlider={true} HeroLeft={'YT-HeroLeftComponent'}
          HeroDesc={'At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation'}/>
        <OurSeviecs/>
        <SuccessStoriesCompon/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} InfinityStyle={'YT-slider'}/>
        <Footer/>
        
    </div>
  )
}
