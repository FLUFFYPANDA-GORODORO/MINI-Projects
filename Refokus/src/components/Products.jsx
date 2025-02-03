import React, { useState } from 'react'
import Product from "./Product"
import { motion } from "motion/react"

function Products() {

    var products = [
        {title:"arqitel" ,description:"Lorem ipsum dolor sit, amet mdaijklo consectetur adipisicing elit. Cupiditate veniam perspiciatis reprehenderit illo voluptate eum accusamus officiis  .",live:true,case:false},
        {title:"TTR" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veniam perspiciatis reprehenderit illo voluptate eum accusamus officiis .",live:true,case:true},
        {title:"YIR 2022" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veniam perspiciatis reprehenderit illo voluptate eum accusamus officiis .",live:true,case:false},
        {title:"Yahoo" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veniam perspiciatis reprehenderit illo voluptate eum accusamus officiis .",live:true,case:true},
        {title:"Rainfall" ,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate veniam perspiciatis reprehenderit illo voluptate eum accusamus officiis .",live:true,case:true}
    ]
    
    const [pos,setPos] = useState(0)
    const mover = (val) => {
      setPos(val*15)
    }

  return (
    <div className='mt-2 relative'>
       {products.map((elem,index) => <Product elem={elem} mover={mover} index={index} />  )} 
       <div className='absolute top-0  w-full h-full pointer-events-none '>
        <motion.div intial={{y:pos}} animate={{y:pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}} className='absolute w-[24rem] h-[15rem] bg-blue-100 left-[28%] overflow-hidden'>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-blue-100'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1737920406899-e1cabc43a6a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-blue-200'><img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1738200984864-cfe24df27e36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-blue-300'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1737601325787-cbf1b5603f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-blue-400'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1738200984745-ff5d0e49de86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-blue-500'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1714296185265-b40dc8f8bd46?q=80&w=193   5&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
        </motion.div>
       </div>
    </div>
  )
}

export default Products
