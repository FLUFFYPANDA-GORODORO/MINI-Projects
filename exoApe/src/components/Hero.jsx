import React from "react";
import { Expo,Power4} from "gsap/all"
import { motion, animate, stagger } from "motion/react"

function Hero() {
  return (
    <div className="relative w-full h-[170vh] bg-zinc-400">
      <div  className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className="text max-w-screen-2xl h-full mx-auto px-5">
          <div className="para mt-96">
            {["Global digital design studio partnering with ", "brands and businesses that create exceptional","experiences where people live, work, and unwind."].map((item,index)=>(
              <p className="text-md text-white font-regular sm:text-2xl overflow-hidden">
              <motion.span initial={{rotate : 90 , y:"100%" , opacity:0 }} animate={{rotate : 0 , y : "0" , opacity:1}} transition={{ease : Power4.easIneOut , duration: 0.8 , delay : index*0.2 }} className="inline-block origin-left ">{item}</motion.span>
              </p>
            ))}
            
          </div>
          <div className="headings mt-8 sm:mt-20">
            {["Digital","Design","Experience"].map((item,index)=>(
                 <h1 className="text-6xl text-white h-[4.5rem] tracking-tight leading-none font-semibold sm:text-8xl overflow-hidden sm:h-[9.5rem]">
              <motion.span initial={{rotate : 90 , y:"100%" , opacity:0 }} animate={{rotate : 0 , y : "0" , opacity:1}} transition={{ease : Power4.easIneOut , duration: 0.9 , delay : index*0. }} className="inline-block origin-left">{item}</motion.span>
            </h1>
            ))}
          </div>
          <div className="para2 mt-64 text-white">
            <p className="text-md font-regular sm:text-xl">
            We help experience-driven companies thrive by    
            </p>
            <p className="text-md font-regular sm:text-xl">
            making their audience feel the refined
            </p>
            <p className="text-md font-regular sm:text-xl">
            intricacies of their brand and product
            </p>
            <p className="text-md font-regular sm:text-xl">
            in the digital space. Unforgettable journeys start
            </p>
            <p className="text-md font-regular sm:text-xl">
            with a click.
            </p>
            <a
              className="border-b-[0.3px] border-zinc-100 pb-1 inline-block mt-10"
              href=""
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
