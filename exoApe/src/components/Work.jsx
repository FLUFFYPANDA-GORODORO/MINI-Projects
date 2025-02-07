import React, { useState } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { motion  } from "motion/react"
import { Power4} from "gsap/all"

function Work() {

  const [items,setItems] =  useState([
    {heading:"Pixelflakes",subheading:"Architectural Marketing agency",vedio:"https://videos.pexels.com/video-files/7316400/7316400-uhd_1440_2560_25fps.mp4",imgage:"https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"},
    {heading:"Pixelflakes",subheading:"Architectural Marketing agency",vedio:"https://videos.pexels.com/video-files/6799744/6799744-sd_360_640_30fps.mp4",imgage:"https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"},
    {heading:"Pixelflakes",subheading:"Architectural Marketing agency",vedio:"https://videos.pexels.com/video-files/5829173/5829173-uhd_1440_2560_24fps.mp4",imgage:"https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"},
    {heading:"Pixelflakes",subheading:"Architectural Marketing agency",vedio:"https://videos.pexels.com/video-files/5595352/5595352-hd_1080_1920_24fps.mp4",imgage:"https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"}
  ])

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-32 px-5 sm:px-10">
        <div className="featured flex gap-2 items-center">
          <span>
            <VscDebugBreakpointLog />
          </span>

          <h1 className="capitalize">featured projects</h1>
        </div>
        <h1 className="text-7xl my-8 sm:text-[13rem] leading-none tracking-tighter font-semibold overflow-hidden"><motion.span          
        initial={{rotate:90 , y:"40%" , opacity: 0}}
        whileInView={{rotate:0 , y:0 , opacity: 1}} 
        viewport={{once:true}}
        transition={{ease : Power4.easIneOut , duration: 0.8}}
        className="inline-block origin-left">Work</motion.span></h1>
        <p className="leading-2 tracking-normal text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste cupiditate tempora cumque. Nihil, quod distinctio! Obcaecati Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem10</p>

        <div className="elems sm:flex flex-wrap gap-5 mt-10">
          {items.map((elem,index)=>(
               <div className="elem w-full sm:w-[48%] mt-10 ">
               <div className="video relative overflow-hidden w-full  h-[104vw] sm:h-[70vh]">
                 <motion.img
                 initial={{opacity: 1}}
                 whileHover={{opacity: 0}}
                 data-scroll
                 data-scroll-speed="-0.2"
                 className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block w-full h-full object-cover " src={elem.imgage} alt="" />
                 <video
                 autoPlay muted loop className="block z-[1] w-full h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src={elem.vedio} ></video>
               </div>
               <div className="mt-4 px-5">
                   <h3>{elem.heading}</h3>
                   <p className="capitalise opacity-40">{elem.subheading}</p>
               </div>
           </div>
          ))}
       
      </div>

      </div>

      
    </div>
  );
}

export default Work;
