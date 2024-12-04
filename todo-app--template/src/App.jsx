import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Guide from './components/Guide'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
      <div>
        <Hero/>
        <About/>
        <Guide/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
      </div>
    </>
      
  )
}

export default App
