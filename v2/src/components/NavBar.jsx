'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { FaLinkedin } from 'react-icons/fa6'
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { MdCopyright } from "react-icons/md";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const socialLink = [
          {
              icon:LuInstagram,
              path:'/'
          },
          {
              icon:FaGithub,
              path:'/'
          },
          {
              icon:FaLinkedin,
              path:'/'
          },
          {
              icon:IoLogoFacebook,
              path:'/'
          }
  
      ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [nav,setNav] = useState(false)

  return (
    <nav
      className={` py-7 xl:py-10 w-full fixed transition-all !z-40 ease-in-out duration-300 border-paragraph-default/20  ${
       isScrolled ? 'backdrop-blur-lg bg-[#111110]/70 !border-b': 'border-b-transparent bg-transparent'} ${nav ?'!backdrop-blur-lg !bg-background-default h-screen':' bg-transparent'}`}
    >
      <div className="main flex justify-between items-center !z-40">
        <Link href={'/'} className="pl-4 border-l-4 border-primary-default !z-40 uppercase text-3xl font-heading">
          nowfal
        </Link>
        <div className="nav-btns xl:hidden">
          <motion.button whileTap={{scale:.5}} onClick={()=>setNav(!nav)} className="!z-30">
            {nav?(
              <IoClose className="!z-30 text-heading-default text-4xl" />
            ):(
              <HiMiniBars3BottomLeft className="!z-30 text-heading-default text-4xl" />
            )}
          </motion.button>
        </div>
        <div className=" hidden xl:flex gap-x-10">
          {['about','services','portfolio','review','blog'].map((item,index)=>(
              <Link href='/' key={index} className=' uppercase text-heading-default font-semibold tracking-widest text-xs'>{item}</Link>
          ))}
        </div>
        <div className=" hidden xl:flex gap-5">
          {/* <HiOutlineMail  className=' text-2xl'/> */}
          <button className=' uppercase bg-primary-default py-3 px-5 hover:scale-105 duration-300 rounded-full text-heading-default font-semibold tracking-widest text-xs'>contact</button>
        </div>
        
      </div>
      <AnimatePresence mode='wait'>
        {nav && (
          <motion.div
            // initial={{ opacity: 0,  }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0, }}
            // transition={{ duration: 0.3,delay:1 }}
            className="flex flex-col main xl:hidden space-y-9 pt-16 "
          >
            <div className="space-y-7">
              {['about', 'services', 'portfolio', 'review', 'blog'].map((item, index) => (
                <Link
                  href="/"
                  key={index}
                  onClick={()=>setNav(!nav)}
                  className="flex items-center justify-between uppercase font-heading text-heading-default text-xl"
                >
                  {item}
                  <FiArrowRight className="p-2 rounded-full bg-paragraph-default/10 text-heading-default text-4xl" />
                </Link>
              ))}
            </div>
            <div className="bg-paragraph-default/10 p-[0.7px] my-14" />
            <div className="flex gap-8 z-30">
              {socialLink.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    href={item.path}
                    className="hover:text-primary-default duration-300 text-xl"
                    key={index}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-3 lg:flex-row justify-between lg:items-center">
              <h3 className="text-paragraph-default z-30 capitalize text-sm flex items-center gap-2">
                <MdCopyright /> 2024, all rights reserved
              </h3>
              <h3 className="text-paragraph-default z-30 capitalize text-sm">
                Developed by: <span className="text-primary-default">nowfal</span>
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`${
          nav ? 'block' : 'hidden'
        } delay-200 h-56 z-0 absolute bottom-0 left-0 w-full`}
        style={{
          background: 'linear-gradient(to top, rgb(210 210 208 / 0.1) 0%, transparent 100%)'
        }}
      ></div>  
    </nav>
  );
};

export default NavBar;
