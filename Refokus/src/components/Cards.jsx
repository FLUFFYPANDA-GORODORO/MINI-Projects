import React from 'react'
import Card from "./Card"


function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-md mx-auto py-20 flex gap-1'>
        <Card w={"basis-1/3"} start={false}  />
        <Card w={"basis-2/3"} start={true}  hover={"bg-purple-500"}/>
        </div>
     
    </div>
  )
}

export default Cards
