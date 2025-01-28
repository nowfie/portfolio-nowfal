import React from 'react'
import Header from '@/components/Header'
import BlogDetail from './(section)/BlogDetail'
import Image from 'next/image'
import BlogSection from '../../(root)/section/BlogSection'
import PrimaryScroll from '@/animations/PrimaryScroll'
import axios from 'axios'

const BlogPage = async ({params}) => {
  const { name } = await params

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/${name}`)
      if (response.status === 200) {
        return response.data
      } else {
        console.error('Error fetching blog data')
        return null
      }
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  const blogData = await fetchBlogData()
  
  return (
    <section className=' space-y-2'>
        <Header name={name} description={''}/>
        <div className="main !mb-24 flex flex-col justify-center items-center gap-14">
            <PrimaryScroll className={'w-full'}>
              <Image src={'/blog.jpg'} width={1000} height={1000} alt='blog-image' className=' rounded-lg w-full h-full'/>
            </PrimaryScroll>
            {/* <div className="xl:w-[75%]"> */}
            <div className=" w-full">

            <BlogDetail data={blogData}/>
            </div>
        </div>
      <BlogSection/>
    </section>
  )
}



export default BlogPage