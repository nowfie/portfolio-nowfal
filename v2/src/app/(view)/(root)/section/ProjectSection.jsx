'use client'
import PrimaryScroll from '@/animations/PrimaryScroll'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

const ProjectSection = () => {

  const [project,setProject] = useState([])
  const [select,setSelect] = useState(0)

  const ProjectBox = ({index}) =>{
    return(
      <PrimaryScroll delay={index/10}>
        <Link
        key={index}
        href="/project/fito fitness"
        className={`block ${index !== 0 ? " mt-8":""} group rounded-lg overflow-hidden relative`}
        aria-label={`Go to project ${index + 1}`}
      >
        <div className="!z-30 flex justify-between w-11/12 items-center absolute bottom-0 right-0 duration-300 opacity-0 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0">
          <h1 className=' font-heading uppercase text-2xl lg:text-3xl'>fito fitness</h1>
          <button className=' hidden  lg:w-[25%] w-[40%] !z-30 h-full rounded-lg group-hover:bg-primary-default group-hover:text-heading-default duration-300 ease-in-out bg-paragraph-default/10 p-4 lg:flex items-center justify-center flex-col uppercase tracking-widest text-xs font-semibold gap-8'> <FiArrowUpRight className=' duration-300 ml-auto text-3xl lg:text-4xl' />
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
      </PrimaryScroll>
    )
  }

  ProjectBox.propTypes = {
    index:PropTypes.number
  }

  return (
    <section className=' py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col lg:flex-row gap-9 justify-between items-baseline">
          <div className="flex flex-col gap-9 justify-between items-baseline">
            <PrimaryScroll>
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest'>portfolio</h5>  
            </PrimaryScroll>
            <PrimaryScroll>
              <h1 className=' uppercase font-heading text-heading'>Designing a <span className=' text-primary-default font-heading'>Better</span> <br className=' hidden lg:hidden' /> World Today</h1>
            </PrimaryScroll>
          </div>
          <PrimaryScroll className={'mt-auto'}>
            <Link href={'/project'} className='font-semibold text-heading-default uppercase tracking-widest text-xs flex items-center gap-5'>view all <FiArrowRight className=' text-lg'/> </Link>
          </PrimaryScroll>
        </div>
        {/* <div className="project-list grid grid-cols-1 gap-8 md:grid-cols-2"> */}
        <div className="project-list columns-1 md:columns-2 gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProjectBox index={index} key={index}/>
          ))}
        </div>
        <PrimaryScroll scale={.98} className="conclusion flex flex-col gap-8 justify-between lg:flex-row">
            <div className="border-l-[4px] border-primary-default pl-5">
              <p className=' text-paragraph-default leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae.</p>
            </div>
            <Link href={'/project'} className=' bg-primary-default rounded-full lg:m-auto text-center w-fit font-semibold uppercase text-xs tracking-widest px-5 py-3 hover:scale-105 duration-300'>view all projects</Link>
        </PrimaryScroll>
      </div>
    </section>
  )
}

export default ProjectSection