import React from 'react'
import Hero from './hero'
import About from './About'
import Services from './Services/page'
import Contact from './Contact/page'

const page = () => {
  return (
   <div >
     <Hero/>
     <About/>
     <Services/>
     <Contact/>
   </div>
  )
}

export default page