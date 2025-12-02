import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'

const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/> 
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </div>
  )
}

export default App
