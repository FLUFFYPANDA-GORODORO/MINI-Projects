import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";
function Spread() {
  return (
    <div className='w-full bg-white '>
      <div className='max-w-screen-2xl mx-auto px-5 sm:px-10'>
        <div className='flex justify-center items-center gap-2'>
            <VscDebugBreakpointLog />
            <h3>In the media</h3>
        </div>
        <div className='text mt-10 text-center'>
        <h1 className='capitalize text-6xl tracking-tighter '>Spread</h1>
        <h1 className='capitalize text-6xl tracking-tighter '>the news</h1>
        <p className='w-2/3 mx-auto mt-8 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit ipsam ut repudiandae, iure asperiores.</p>
        </div>
      </div>
    </div>
  )
}

export default Spread
