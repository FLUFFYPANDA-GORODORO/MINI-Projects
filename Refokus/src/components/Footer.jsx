import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-md mx-auto py-10 flex gap-2'>
        <div className='basis-2/3 flex items-center justify-center flex-col bg-zinc-800 h-[32vh]'>
            <h1 className='text-9xl  font-semibold leading-none tracking-tighter hover:text-purple-500'>refokus.</h1>
            <p className='text-xs'>Developed by your friendly neighbourbood developer</p>

        </div>
        <div className='basis-1/3 bg-zinc-800 flex items-center flex-col justify-center h-[32vh]'>
            <h1 className='hover:text-purple-500'>Socials</h1>
            {["instagram","facebook","X","linkedIn"].map((item,index)=> <a className='block mt-2 text-zinc-600 hover:text-purple-400' >{item}</a>)}
        </div>

      </div>
    </div>
  )
}

export default Footer
