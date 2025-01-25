'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [nav,setNav] = useState(true)

  return (
    <nav
      className={` py-7 xl:py-10 w-full fixed transition-all !z-40 ease-in-out duration-300 border-paragraph-default/20  ${
       isScrolled
          ? 'backdrop-blur-lg bg-paragraph-default/10 border-b'
          : 'border-b-transparent bg-transparent'
      }`}
    >
      <div className="main flex justify-between items-center !z-40">
        <Link href={'/'} className="pl-4 border-l-4 border-primary-default !z-40 uppercase text-3xl font-heading">
          nowfal
        </Link>
        <div className="nav-btns xl:hidden">
          <motion.button whileTap={{scale:.5}} onClick={()=>setNav(!nav)} className="!z-30">
            {nav?(
              <HiMiniBars3BottomLeft className="!z-30 text-heading-default text-4xl" />
            ):(
              <IoClose className="!z-30 text-heading-default text-4xl" />
            )}
          </motion.button>
        </div>
        <div className=" hidden xl:flex gap-x-10">
          {['about','services','portfolio','review','blog'].map((item,index)=>(
              <Link href='/' key={index} className=' uppercase text-heading-default font-semibold tracking-widest text-xs'>{item}</Link>
          ))}
        </div>
        <div className=" hidden xl:flex gap-5">
          <HiOutlineMail  className=' text-2xl'/>
          <HiMiniBars3BottomLeft  className=' text-2xl'/>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
