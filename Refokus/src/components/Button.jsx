import React from 'react'
import { VscArrowRight } from "react-icons/vsc";

function Button({title}) {
  return (
    <div className='w-28 px-1 py-1 bg-zinc-100 text-black rounded rounded-full flex items-center'>
        <span className='text-sm mx-2'>{title}</span>
        <VscArrowRight />
    </div>
  )
}

export default Button
  