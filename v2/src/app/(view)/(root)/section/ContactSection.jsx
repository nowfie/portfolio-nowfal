import PrimaryScroll from '@/animations/PrimaryScroll'
import React from 'react'

const ContactSection = () => {
  return (
    <section className=' overflow-x-hidden py-12 lg:py-16 '>
        <div className="main flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="lg:w-1/2 flex flex-col gap-9">
                <PrimaryScroll className={'space-y-9'}>
                <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest '>contact</h5>
                <h1 className=' uppercase font-heading text-heading'> let's <span className=' text-primary-default font-heading'>make</span> <br /> an <span className=' text-primary-default font-heading'>imapact</span><br /> together.</h1>
                </PrimaryScroll>
                <PrimaryScroll className="border-l-[4px] border-primary-default pl-5">
                    <p className=' text-paragraph-default leading-relaxed text-base lg:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tempora rem unde excepturi ut nesciunt, doloribus mollitia atque sit vitae.</p>
                </PrimaryScroll>        
            </div>
            <div className="lg:w-1/2 space-y-10">
                <div className=" flex flex-col gap-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <input name='name' placeholder='enter your name' className='!rounded-none placeholder-paragraph-default capitalize text-paragraph-default border-paragraph-default/20 bg-transparent p-5 border-b' type="text" />
                        <input name='mail' placeholder='enter your mail' className='!rounded-none placeholder-paragraph-default capitalize text-paragraph-default border-paragraph-default/20 bg-transparent p-5 border-b' type="text" />
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <input name='phone' placeholder='enter your name' className=' !rounded-none placeholder-paragraph-default capitalize text-paragraph-default border-paragraph-default/20 bg-transparent p-5 border-b' type="text" />
                        <input name='service' placeholder='enter your name' className='!rounded-none placeholder-paragraph-default capitalize text-paragraph-default border-paragraph-default/20 bg-transparent p-5 border-b' type="text" />
                    </div>
                    <textarea name="message" placeholder='message here' className='!rounded-none placeholder-paragraph-default capitalize text-paragraph-default p-5 border-paragraph-default/20 w-full h-44 bg-transparent border-b' id=""></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <p className=' text-paragraph-default text-xs'>*We promise not to disclose your personal information to third parties.</p>
                    <button className=' bg-primary-default px-5 py-3 rounded-full text-heading-default uppercase font-semibold text-xs tracking-widest'>send message</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection