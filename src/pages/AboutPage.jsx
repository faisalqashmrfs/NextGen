import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import BrilliantSection from '../components/BrilliantSection/BrilliantSection'
import Award from '../components/Award/Award'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import OurAchievments from '../components/OurAchievments/OurAchievments'

export default function AboutPage() {
  return (
    <div>
        <NavBar/>
        <Hero  HeroClass={'Hero'} showNumberAbout={true} HeroTitle={'Elevating Brands in the Digital Age'} showDesc={false} showSlider={false} HeroLeft={'YT-HeroLiftTow '}/>
        <BrilliantSection/>
        <Award/>
        <OurAchievments/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  )
}
