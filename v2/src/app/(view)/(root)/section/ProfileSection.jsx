'use client'

import React, { useState } from 'react'
import { FaPython } from 'react-icons/fa6'
import { GoDotFill } from "react-icons/go";

const ProfileSection = () => {
    const [select,setSelect] = useState(0)

    const EducationBox = () =>{
        return(
            <div className=" space-y-3 bg-background-default lg:w-11/12 rounded-lg p-5">
                <h3 className=' text-xs font-semibold text-primary-default'>2021 - 2025</h3>
                <h1 className=' font-heading uppercase text-lg'>b.tech computer science and business systems</h1>
                <h2 className=' capitalize text-paragraph-default text-sm tracking-widest flex gap-2 items-center'> <GoDotFill className=' text-primary-default'/> syed ammal engineering college</h2>
            </div>
        )
    }

    const ExperienceBox = () =>{
        return(
            <div className=" space-y-3 bg-background-default lg:w-11/12 rounded-lg p-5">
                <h3 className=' text-xs font-semibold text-primary-default'>2021 - 2025</h3>
                <h1 className=' font-heading uppercase text-lg'>fullstack developer</h1>
                <h2 className=' capitalize text-paragraph-default text-sm tracking-widest flex gap-2 items-center'> <GoDotFill className=' text-primary-default'/> QTL agritech</h2>
            </div>
        )
    }


  return (
    <section className='lg:pb-24 lg:pt-12 pt-12 pb-12  overflow-x-hidden'>
        <div className="main bg-paragraph-default/10 rounded-xl p-8 space-y-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                <div className="lg:w-1/2 rounded-lg space-y-10">
                    <h1 className=' font-heading text-heading-default text-3xl uppercase '>solid <span className="text-primary-default font-heading">academic</span> foundation</h1>
                    <div className=" space-y-4">
                        {Array.from({length:2}).map((item,index)=>(
                            <EducationBox key={index}/>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 flex border-t lg:border-t-0 lg:border-l border-paragraph-default/20 lg:block">
                    <div className=" lg:w-[92%] pt-10 lg:pt-0 ml-auto space-y-10">
                        <h1 className=' font-heading text-heading-default text-3xl uppercase '>proven <span className="text-primary-default font-heading">development</span> experience</h1>    
                        <div className=" space-y-4">
                            {Array.from({length:4}).map((item,index)=>(
                                <ExperienceBox key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProfileSection