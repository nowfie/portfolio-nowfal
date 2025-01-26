'use client'

import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const PrimaryScroll = ({children,className,opacity=0,delay=0,duration=.7,scale=.9}) => {

    const scrollRef = useRef(null)
    const scrollInView = useInView(scrollRef,{once: false})

  return (
    <motion.div 
    ref={scrollRef}
    initial={{opacity:opacity,scale:scale,y:10}}
    animate={{opacity:scrollInView?1:opacity,scale:scrollInView?1:scale,y:scrollInView?0:10}}
    transition={{duration:duration,delay:delay}}
    className={`${className}`}>
        {children}
    </motion.div>
  )
}

PrimaryScroll.propTypes = {
    children:PropTypes.any
}

export default PrimaryScroll