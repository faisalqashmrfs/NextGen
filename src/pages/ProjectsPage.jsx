import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import KeyFeatures from '../components/KeyFeatures/KeyFeatures'
import OurWorks from '../components/OurWorks/OurWorks'
import Hero from '../components/Hero/Hero'
import ProjectsShowcase from '../components/ProjectsShowcase/ProjectsShowcase'

export default function ProjectsPage() {
  return (
    <div>
        <NavBar/>
        <Hero  HeroClass={'HeroProjects'} Projects={true} HeroTitle={'Empowering Your Digital Vision'} showDesc={true} HeroLeft={'YT-HeroLiftTow'}
        HeroDesc={'At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.'}
        />
        <KeyFeatures/>
        <ProjectsShowcase/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow}  InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  );
}
