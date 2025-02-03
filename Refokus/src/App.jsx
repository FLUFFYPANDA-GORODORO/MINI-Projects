import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Marques from './components/Marques'
import Stripes from './components/Stripes'
import Products from './components/Products'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full max-h-500 bg-zinc-900 text-white font-[satoshi-variable]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
