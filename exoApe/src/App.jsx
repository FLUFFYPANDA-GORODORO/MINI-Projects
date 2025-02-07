import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Images from './components/Images'
import Spread from './components/Spread'
import Footer from './components/Footer'
import Playreel from './components/Playreel'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      <Work />
      <Playreel />
      <Images />
      <Spread />
      <Footer />
    </div>
  )
}

export default App
