/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Digital1 from '../components/Digital1/Digital1'
import Question from '../components/Question/Question'
import Footer from '../components/Footer/Footer'
import FormOfCountactus from '../components/FormOfCountactus/FormOfCountactus'
import Hero from '../components/Hero/Hero'
export default function ContactPage() {
  return (
    <div>
        <NavBar/>
        <Hero  HeroClass={'Hero'} showNumberContact={true} HeroTitle={'Get in Touch with Us Today!'} showDesc={true} showSlider={true} HeroLeft={'YT-HeroLeftComponent'}
        HeroDesc={'At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.'}
        />   
        <FormOfCountactus/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow}  InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  )

}
