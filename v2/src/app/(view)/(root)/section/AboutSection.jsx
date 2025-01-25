'use client'

import React, { useState } from 'react'

const AboutSection = () => {


  return (
    <section className=' pt-12 pb-1 lg:pt-16 lg:pb-12 overflow-x-hidden'>
      <div className="main">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-10">
            <h1 className=' font-heading text-heading-default text-heading uppercase'>story <br /> about <span className="text-primary-default font-heading">me</span></h1>
            <div className="border-l-[4px] border-primary-default pl-5">
              <p className=' text-paragraph-default leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae.</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ul className=' space-y-8'>
              {Array.from({length:2}).map((item,index)=>(
                <li className=' leading-relaxed text-paragraph-default' key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit delectus, porro dicta quam est sapiente iste dolor earum sed! Eius, aut, cumque culpa sint voluptates tenetur suscipit, mollitia laborum laboriosam consequuntur accusantium doloribus quod.</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection