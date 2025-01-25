import { serviceData } from '@/utils/staticData'
import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md'

const BlogDetail = () => {
  return (
    <div className=' space-y-6'>
      {/* <div className="image relative h-64 md:h-96 overflow-hidden">
        <img src="/service1.webp" className=' absolute top-0 w-full bg-cover' alt="" />
      </div> */}
      <div className="date flex ">
          {/* <h1 className=' font-heading text-3xl capitalize font-bold mb-4'>{serviceData[0].title}</h1> */}
          <h3 className=' text-base capitalize font-heading flex items-center gap-3'>
            <MdOutlineDateRange className=' text-primary-default text-lg relative'/>
            may 11, 2024  
          </h3>
      </div>
      <div className="description">
        <ul className=' space-y-8'>
          {serviceData[1].details.map((item,index)=>(
            <li key={index} className=' text-paragraph-default leading-relaxed capitalize'>{item}</li>
          ))}
        </ul>
      </div>
      <div className="message pl-5 !my-12 italic text-paragraph-default border-l-[7px] border-primary-default">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eligendi praesentium sequi quos unde vitae accusamus, asperiores odit quod ullam nulla modi aperiam eos rerum perferendis. Tempora, quo corporis sequi placeat error velit expedita fugit ipsam nisi cumque officia sit.</p>
      </div>
      <ul className=' space-y-8 !my-12'>
          {serviceData[0].details.map((item,index)=>(
            <li key={index} className=' text-paragraph-default leading-relaxed capitalize'>{item}</li>
          ))}
        </ul>
        <div className=" space-y-3">
            <h1 className=' text-heading-default font-heading uppercase text-2xl'>conclusion</h1>
            <p className=' text-paragraph-default leading-relaxed capitalize'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ex voluptate ea repellat aspernatur vel, impedit, excepturi, officiis dolores voluptatibus nulla doloribus temporibus. Quos fuga explicabo id consequatur provident enim vero excepturi cum ratione commodi similique recusandae esse, asperiores rerum.</p>
        </div>
    </div>
  )
}

export default BlogDetail