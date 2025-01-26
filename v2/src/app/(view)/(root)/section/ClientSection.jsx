'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types'
const ClientSection = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const ClientBox = ({index}) =>{
    return(
      <div className={`  mx-6 ${index%2?'':''}  flex flex-col justify-center items-center`}>
        <Image src={'/client.jpg'} alt='client image' width={1000} height={1000} className=' w-[30%] lg:w-[17%] h-[30%] lg:h-[17%] mb-8 rounded-full'/>
        <h1 className=' font-heading text-heading-default mb-3 uppercase text-2xl'>mohammed nowfal</h1>
        <h3 className=' text-paragraph-default uppercase mb-7 font-semibold text-xs tracking-widest'>unityr techlabs</h3>
        <p className=' leading-relaxed capitalize text-center text-heading-default'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus illum itaque cum delectus facere rem rerum, excepturi nesciunt error, suscipit, impedit adipisci! Cupiditate, placeat velit autem mollitia iste facere sint impedit alias beatae. Eaque.</p>
      </div>
    )
  }

  ClientBox.propTypes = {
    index: PropTypes.number
  }
  return (
    <section className=' overflow-x-hidden hidden py-12 lg:py-16 '>
        <div className=" space-y-20">
          <div className="header main flex flex-col gap-9">
              <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph-default uppercase tracking-widest mx-auto'>review</h5>
              <h1 className=' uppercase font-heading text-heading text-center'> Customer Voices: <br /> Hear What <span className=' text-primary-default font-heading'>they say</span> !</h1>
              {/* <p className=' leading-relaxed text-paragraph-default capitalize text-center lg:w-1/2 lg:mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in vero optio tenetur rem unde!</p> */}
          </div>
          {/* <ClientBox/> */}
          <div className=" transition-all duration-300 relative text-heading-default">
            <div className=" hidden lg:block w-[33%] h-full left-0 absolute backdrop-blur-sm z-30 bg-background-default/10"></div>
            <div className=" hidden lg:block w-[33%] h-full  right-0 absolute backdrop-blur-sm z-30 bg-background-default/10"></div>
          <Slider {...settings} className="">
              {Array.from({length:8}).map((item,index) => (
                <ClientBox index={index} key={index}/>
              ))}
          </Slider>
        </div>
        </div>
    </section>
  )
}

export default ClientSection