'use client'

import React, { useState } from 'react'
import { FaPython } from 'react-icons/fa6'

const SkillSection = () => {
    const [select,setSelect] = useState(0)

    const SkillBox = () =>{
        return(
            <div className=" bg-paragraph-default/10 overflow-hidden gap-3 relative rounded-lg px-7 py-11 justify-center items-center flex cursor-pointer group">
                <FaPython className=' text-4xl transition-all absolute left-1/2 -translate-x-1/2 group-hover:left-[20%] group-hover:text-primary-default duration-300'/>
                <div className="bg-primary-default absolute top-0 right-0 !h-full w-full px-6 py-3 flex flex-col justify-center  gap-3 opacity-0 duration-300 transition-all group-hover:opacity-100 ">
                    <FaPython className=' text-4xl transition-all  text-heading-default duration-300'/>
                    <h1 className=' opacity-0  transition-all group-hover:opacity-100  text-heading-default z-20 uppercase tracking-widest text-sm font-heading'>python</h1>
                </div>
            </div>
        )
    }
  return (
    <section className='lg:py-16 py-12 overflow-x-hidden'>
        <div className="main space-y-8">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
                <div className="lg:w-[30%] space-y-10">
                    <h1 className=' font-heading text-heading-default text-heading uppercase'>why <br /> hire <span className="text-primary-default font-heading">me ?</span></h1>
                </div>
                <div className="lg:w-[70%]  lg:block space-y-4">
                    <h2 className=' hidden lg:block font-heading text-heading-default uppercase text-xl'>languages <span className="text-primary-default font-heading">known</span></h2>                    
                    <p className=' text-paragraph-default leading-relaxed w-11/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ad modi distinctio culpa dolorum adipisci optio perferendis provident, ut facere ab quasi ullam temporibus? Nobis, voluptatum vero amet doloribus quis excepturi labore sapiente mollitia autem tempore odit ad libero! Similique!</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
                <div className="lg:w-[30%] space-y-10">
                    <div className="flex flex-col gap-5">
                    {['languages','frontend','backend','aiml','others',].map((item,index)=>(
                        <button key={index}  onClick={()=>setSelect(index)} className={` transition-all  duration-300 uppercase font-semibold text-xs p-4 rounded-lg tracking-widest ${index === select?' bg-primary-default':'bg-paragraph-default/10'}`}>{item}</button>
                    ))}
                    </div>
                </div>
                <div className=" space-y-4 block lg:hidden mt-6">
                    <h2 className='  font-heading text-heading-default uppercase text-xl'>languages <span className="text-primary-default font-heading">known</span></h2>
                    <p className=' text-paragraph-default leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aspernatur aliquam tempora laborum perspiciatis optio, tempore fugit magnam. Quisquam expedita minima iste deserunt voluptas?</p>
                </div>
                <div className="lg:w-[70%] relative">
                    <div className="grid skill-scrolls pr-1 lg:pr-3 gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-h-[19rem] overflow-y-auto">
                        {Array.from({length:5}).map((item,index)=>(
                            <SkillBox key={index}/>
                        ))}
                    </div>
                    {/* <h4 className=' italic text-primary-default capitalize absolute right-0 -bottom-5 text-xs lg:bottom-0'>scroll down</h4> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillSection