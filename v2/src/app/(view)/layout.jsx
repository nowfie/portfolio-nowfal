import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className=' bg-background-default relative' >
      <Cursor/>
      <NavBar/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout