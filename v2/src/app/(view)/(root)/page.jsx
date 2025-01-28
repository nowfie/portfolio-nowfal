import React from 'react'
import HeroSection from './section/HeroSection'
import AboutSection from './section/AboutSection'
import ProjectSection from './section/ProjectSection'
import RecordSection from './section/RecordSection'
import SkillSection from './section/SkillSection'
import ServiceSection from './section/ServiceSection'
import ClientSection from './section/ClientSection'
import BlogSection from './section/BlogSection'
import ContactSection from './section/ContactSection'

const page = () => {
  return (
    <main className=' flex flex-col '>
        <HeroSection/>
        <AboutSection/>
        <RecordSection/>
        <ServiceSection/>
        {/* <SkillSection/> */}
        <ProjectSection/>
        <ClientSection/>
        <BlogSection/>
        <ContactSection/>
    </main>
  )
}

export default page