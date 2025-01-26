import Header from '@/components/Header'
import React from 'react'
import ProfileSection from '../(root)/section/ProfileSection'
import BlogSection from '../(root)/section/BlogSection'
import ProjectSection from '../(root)/section/ProjectSection'

const page = () => {
  return (
    <section className=' space-y-2 overflow-x-hidden' >
        <Header name={'how to become a graphiq designer in simple steps'} description={''}/>
        <ProfileSection/>
        <ProjectSection/>
        <BlogSection/>
    </section>
  )
}

export default page