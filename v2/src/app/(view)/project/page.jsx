'use client'

import Header from '@/components/Header'
import React, { useState } from 'react'
import ProjectSection from '../(root)/section/ProjectSection'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'

const page = () => {
    const [select,setSelect] = useState(0)
  return (
    <section className=' space-y-6'>
          <Header name={'Our best works'} description={''}/>
          <div className="main space-y-9">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {['website','mobile','desktop','ai'].map((item,index)=>(
                <button key={index} onClick={()=>setSelect(index)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-3 rounded-lg tracking-widest ${index === select?' bg-primary-default':'bg-paragraph-default/10'}`}>{item}</button>
              ))}
            </div>
            <div className="project-list columns-1 md:columns-2 lg:columns-3 gap-8">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Link
                    key={index}
                    href="/project/fito fitness"
                    className={`block ${index !== 0 ? " mt-8":""} group rounded-lg overflow-hidden relative`}
                    aria-label={`Go to project ${index + 1}`}
                    >
                    <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-0 right-0 duration-300 opacity-0 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0">
                        <h1 className=' font-heading uppercase text-2xl lg:text-3xl'>fito fitness</h1>
                        <button className=' hidden  lg:w-[35%] w-[40%] !z-30 h-full rounded-lg group-hover:bg-primary-default group-hover:text-heading-default duration-300 ease-in-out bg-paragraph-default/10 p-4 lg:flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8'> <FiArrowUpRight className=' duration-300 ml-auto text-3xl lg:text-4xl' />
                          read more
                        </button>
                      </div>
                    <div style={{background:'linear-gradient(to bottom,  transparent 0%, black 100%)'}} className="black-shade p-12 !z-10 duration-300 absolute bottom-0 left-0 w-full translate-y-52 group-hover:translate-y-0"/>
                    <Image
                        src={`/1-s(${index + 1}).jpg`}
                        alt={`Project ${index + 1} image`}
                        width={1000}
                        height={1000}
                        className="w-full h-full group-hover:scale-110 duration-300 z-0"
                        priority={index === 0}
                    />
                    </Link>
                ))}
            </div>
          </div>
    </section>
  )
}

export default page