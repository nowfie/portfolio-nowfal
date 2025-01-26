import { serviceData } from '@/utils/staticData';
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import PropType from 'prop-types'
import PrimaryScroll from '@/animations/PrimaryScroll';

const ServiceSection = () => {
    const ServiceBox = ({item,index}) =>{
        return(
            <div className={` group flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between ${index ==0?' border-t pt-10':''} border-b border-paragraph-default/15 pb-12`}>
                <div className="lg:w-[80%] space-y-8">
                    <PrimaryScroll>
                    <h1 className='font-heading text-heading-default text-3xl uppercase leading-normal'> {index+1}. {item.title}</h1>

                    </PrimaryScroll>
                    <PrimaryScroll className="border-l-[4px] border-primary-default pl-8">
                        <p className=' text-paragraph-default leading-relaxed text-base lg:w-3/4'>{item.description}</p>
                    </PrimaryScroll>
                </div>
                <PrimaryScroll className=" ">
                    <Link href={`/service/${item.name}`} className=' rounded-lg group-hover:bg-primary-default group-hover:text-heading-default duration-300 ease-in-out bg-paragraph-default/10 p-5 flex flex-row-reverse items-center lg:flex-col w-fit uppercase tracking-widest text-xs font-semibold gap-5'> <FiArrowUpRight className=' duration-300 ml-auto text-lg lg:text-4xl group-hover:rotate-45' /> read more</Link>
                </PrimaryScroll>
            </div>
        )
    }

    ServiceBox.propTypes = {
        item:PropType.object,
        index: PropType.number
    }

  return (
    <section className='py-12 lg:py-16 overflow-x-hidden' >
      <div className="main space-y-20">
        <div className="header flex flex-col gap-9">
            <PrimaryScroll>
                <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest'>my services</h5>
            </PrimaryScroll>
            <PrimaryScroll>
                <h1 className=' uppercase font-heading text-heading'> We generate <span className=' text-primary-default font-heading'>unique</span> ideas</h1>
            </PrimaryScroll>
        </div>
        <div className="project-list space-y-8">
            {serviceData.map((item,index)=>(
                <ServiceBox item={item} index={index} key={index}/>
            ))}
        </div>
        
      </div>
    </section>
  )
}

export default ServiceSection