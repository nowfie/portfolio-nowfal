'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrimaryScroll from '@/animations/PrimaryScroll'
import axios from 'axios'

const BlogSection = () => {

  const [data,setData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog`).then((res)=>{
      if(res.status === 200 && Array.isArray(res.data.data)){
        setData(res.data.data)
      }else{
        setErrorMessage(res.data.message || 'Unexpected response from server');
      }
    }).catch((error) => {
      setErrorMessage('Failed to fetch data. Please try again later.');
      console.error('API Error:', error);
    });
  },[])

  const BlogBox = ({index,item}) =>(
    <PrimaryScroll>
      <Link href={`/blog/${item.title}`} className={` flex flex-col relative group gap-8`}>
        <div className=" z-30 absolute top-0 flex justify-between p-5 left-0 w-full">
          <h3 className=' !bg-heading-default !text-background-default py-3 px-5 uppercase font-semibold text-xs tracking-widest rounded-full'>design</h3>
          <h3 className=' bg-background-default text-heading-default  py-3 px-5 uppercase font-semibold text-xs tracking-widest  rounded-full'>11.05.2025</h3>
        </div>
        <div className=" overflow-hidden rounded-lg">
          <Image src={'/blog.jpg'} width={700} height={700} alt='blog-image' className=' duration-300 group-hover:scale-110 w-full h-full'/>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className=" lg:w-[70%] space-y-4">
            <h1 className=' font-heading text-2xl uppercase text-heading-default'>{item.title}</h1>
            <p className=' text-paragraph-default  capitalize leading-relaxed'>{item.description}</p>
          </div>
          <div className="hidden lg:block lg:w-[20%]">
            <button className=' w-fit lg:w-full h-full rounded-lg group-hover:bg-primary-default group-hover:text-heading-default duration-300 ease-in-out bg-paragraph-default/10 p-4 flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8'> <FiArrowUpRight className=' duration-300 ml-auto text-4xl group-hover:rotate-45' /> read more</button>
          </div>
        </div>
      </Link>
    </PrimaryScroll>
  )

  BlogBox.propTypes = {
    index:PropTypes.number,
    item:PropTypes.object
  }

  return (
    <section className='py-12 lg:py-16  overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header  flex flex-col gap-9">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest'>news letter</h5>
            </PrimaryScroll>
            <PrimaryScroll>
              <h1 className=' uppercase font-heading text-heading'>latest from <span className=' text-primary-default font-heading'>blog</span></h1>
            </PrimaryScroll>
        </div>
        {/* <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 ">
           {Array.from({length:2}).map((item,index)=>(
            <BlogBox key={index}/>
           ))}
        </div> */}
        <div className="transition-all relative w-full duration-300 text-heading-default">
          {data.length>0?(
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className=" !overflow-visible"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className=' !h-[25rem] md:!h-[35rem] lg:!h-[27rem] xl:!h-full !overflow-hidden'>
                <BlogBox index={index} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          ):(
            <h1>{errorMessage || 'No data found'}</h1>
          )}
        </div> 
      </div>
    </section>
  )
}

export default BlogSection