import React, { useState } from 'react'
import { useScroll,useMotionValueEvent } from "motion/react"

function Work() {

    const [images,setImages] =  useState([
        {url:"https://images.unsplash.com/photo-1737920406899-e1cabc43a6a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"49%",left:"48%",isActive:false},
        {url:"https://images.unsplash.com/photo-1738200984864-cfe24df27e36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"51%",left:"45%",isActive:false},
        {url:"https://images.unsplash.com/photo-1737601325787-cbf1b5603f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"53%",left:"46%",isActive:false},
        {url:"https://images.unsplash.com/photo-1738200984745-ff5d0e49de86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"57%",left:"51%",isActive:false},
        {url:"https://images.unsplash.com/photo-1738200984745-ff5d0e49de86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"53%",left:"48%",isActive:false},
        {url:"https://images.unsplash.com/photo-1714296185265-b40dc8f8bd46?q=80&w=193   5&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",top:"59%",left:"47%",isActive:false}
    ])

    const {scrollYProgress} =  useScroll()

    
    scrollYProgress.on("change" , (data) => {
      function imagesShow(arr){
        setImages(prev => (
          prev.map((item,index) => (
            arr.indexOf(index) === -1 ? ( {...item, isActive: false} ) : {...item, isActive: true}
            
          ))
        )) 
      }

      switch(Math.floor(data*100)){
        case 0:
          imagesShow([]);
          break;
        
        case 1:
          imagesShow([0]);
          break;
        
        case 2:
          imagesShow([0,1]);
          break;
        
        case 3:
          imagesShow([1,2]);
          break;
        
        case 4:
          imagesShow([2,3]);
          break;
        
        case 5:
          imagesShow([3,5]);
          break;
        
      }
  
    })
  
      
 

  return (
    <div className='w-full mt-20 '>
      <div className='relative max-w-screen-md mx-auto text-center'>
        <h1 className='text-[30vw] leading-none tracing-tight font-medium select-none'>work</h1>
        <div className='w-full h-full  absolute top-0'>
                {images.map((elem,index) => (elem.isActive && <img className='absolute h-60 w-44 rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top,left:elem.left}} alt="" />))}
        </div> 
      </div>   
    </div>
  )
}

export default Work
