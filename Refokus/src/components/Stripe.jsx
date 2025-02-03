import React from 'react'

function Stripe({val}) {
 
  return (
    <div className='w-[16.66%] h-16 px-4 py-3 border-t-2 border-b-2 border-r-2 border-zinc-700 flex justify-between items-center'>
      <img className='object-cover h-full w-[80%]' src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
