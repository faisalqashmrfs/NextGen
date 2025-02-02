/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import ReasonsToChoose from '../components/ReasonsToChoose/ReasonsToChoose'
import OurServicesHome from '../components/OurServicesHome/OurServicesHome'
import OurWorks from '../components/OurWorks/OurWorks'
import Hero from '../components/Hero/Hero'
export default function HomePage() {
  return (
    <div>
        <NavBar/> 
        <Hero HeroClass={'Hero'} show={true} HomeRight={true} HeroTitle={'Digital Solutions That Drive Success'} showDesc={true} showSlider={true} HeroLeft={'YT-HeroLeftComponent'}
          HeroDesc={'At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.'}/>
        <ReasonsToChoose/>
        <OurServicesHome/>
        <OurWorks/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow}   InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  )
}
