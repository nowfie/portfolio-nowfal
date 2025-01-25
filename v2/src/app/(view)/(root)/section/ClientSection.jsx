import Image from 'next/image'
import React from 'react'

const ClientSection = () => {
  const ClientBox = () =>{
    return(
      <div className=" lg:w-1/2 mx-auto flex flex-col justify-center items-center">
        <Image src={'/client.jpg'} alt='client image' width={1000} height={1000} className=' w-[30%] lg:w-[17%] h-[30%] lg:h-[17%] mb-8 rounded-full'/>
        <h1 className=' font-heading text-heading-default mb-3 uppercase text-2xl'>mohammed nowfal</h1>
        <h3 className=' text-paragraph-default uppercase mb-7 font-semibold text-xs tracking-widest'>unityr techlabs</h3>
        <p className=' leading-relaxed capitalize text-center text-heading-default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus illum itaque cum delectus facere rem rerum, excepturi nesciunt error, suscipit, impedit adipisci! Cupiditate, placeat velit autem mollitia iste facere sint impedit alias beatae. Eaque.</p>
      </div>
    )
  }
  return (
    <section className=' overflow-x-hidden py-12 lg:py-16 '>
        <div className="main space-y-20">
          <div className="header flex flex-col gap-9">
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest mx-auto'>testimonial</h5>
              <h1 className=' uppercase font-heading text-heading text-center'> Customer Voices: <br /> Hear What <span className=' text-primary-default font-heading'>they say</span> !</h1>
              {/* <p className=' leading-relaxed text-paragraph-default capitalize text-center lg:w-1/2 lg:mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in vero optio tenetur rem unde!</p> */}
          </div>
          <ClientBox/>
        </div>
    </section>
  )
}

export default ClientSection