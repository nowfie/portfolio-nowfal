'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectSection = () => {

  const [project,setProject] = useState([])
  const [select,setSelect] = useState(0)

  return (
    <section className=' py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col lg:flex-row gap-9">
          <div className="lg:w-1/2">
            <h1 className=' uppercase font-heading text-heading'>Designing a <span className=' text-primary-default font-heading'>Better</span> <br className=' hidden lg:block' /> World Today</h1>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between gap-8">
            <p className=' text-paragraph-default leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia accusantium iste architecto, odit accusamus sint.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {['website','mobile','desktop','ai'].map((item,index)=>(
                <button key={index} onClick={()=>setSelect(index)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-3 rounded-lg tracking-widest ${index === select?' bg-primary-default':'bg-paragraph-default/10'}`}>{item}</button>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="project-list grid grid-cols-1 gap-8 md:grid-cols-2"> */}
        <div className="project-list columns-1 md:columns-2 gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Link
              key={index}
              href="/project/fito fitness"
              className={`block ${index !== 0 ? " mt-8":""} group rounded-lg overflow-hidden relative`}
              aria-label={`Go to project ${index + 1}`}
            >
              <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-0 right-0">
                <h1 className=' font-heading uppercase text-2xl lg:text-3xl'>fito fitness</h1>
                <button className='lg:w-[25%] w-[40%] !z-30 opacity-0 group-hover:opacity-100 translate-y-52 group-hover:-translate-y-0 h-full rounded-lg group-hover:bg-primary-default group-hover:text-heading-default duration-300 ease-in-out bg-paragraph-default/10 p-4 flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8'> <FiArrowUpRight className=' duration-300 ml-auto text-3xl lg:text-4xl' />
                 read more
                </button>
              </div>
              <div style={{background:'linear-gradient(to bottom,  transparent 0%, black 100%)'}} className="black-shade p-12 !z-10 duration-300 absolute bottom-0 left-0 w-full translate-y-52 group-hover:translate-y-0">

              </div>
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

        <div className="conclusion flex flex-col gap-8 justify-between lg:flex-row">
            <div className="border-l-[4px] border-primary-default pl-5">
              <p className=' text-paragraph-default leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae.</p>
            </div>
            <Link href={'/project'} className=' bg-primary-default rounded-full lg:m-auto text-center w-fit font-semibold uppercase text-xs tracking-widest px-5 py-3'>view all projects</Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection