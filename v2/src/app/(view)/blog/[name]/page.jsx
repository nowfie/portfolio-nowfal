import React from 'react'
import Header from '@/components/Header'
import BlogDetail from './(section)/BlogDetail'
import Image from 'next/image'
import BlogSection from '../../(root)/section/BlogSection'
import PrimaryScroll from '@/animations/PrimaryScroll'

const BlogPage = async ({params}) => {
  const { name } = await params
  return (
    <section className=' space-y-2'>
        <Header name={'how to become a graphiq designer in simple steps'} description={''}/>
        <div className="main !mb-24 flex flex-col justify-center items-center gap-14">
            <PrimaryScroll>
              <Image src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>
            </PrimaryScroll>
            <div className="xl:w-[75%]">
            <BlogDetail/>
            </div>
        </div>
      <BlogSection/>
    </section>
  )
}



export default BlogPage