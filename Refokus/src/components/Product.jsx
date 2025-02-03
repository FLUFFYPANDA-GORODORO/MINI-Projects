import React from 'react'
import Button from "./Button"

function Product({elem,mover,index}) {
  return (
    <div className='w-full h-[15rem] text-white'>
      <div onMouseEnter={()=>{mover(index)}} className='w-full flex justify-between items-center h-[15rem] p-40'>
            <h1 className='text-[2.5rem] font-meduim capitalize'>{elem.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-6'>{elem.description}</p>
                <div className='flex justify-around items-center'>
                {elem.live && <Button title={"Get started"} /> }
                {elem.case && <Button title={"Case Study"} />}
                </div>
                
            </div>
      </div>
    </div>
  )
}

export default Product
