import React, { useEffect, useRef } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import gsap , { ScrollTrigger } from "gsap/all"
import { Power4} from "gsap/all"

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger : parent.current,
        top:"0 0",
        pin:true,
        scrub :1,
        markers : false
    },
    })
    tl.to(videodiv.current,{
      
      width:"105%",
      height:"105%",
      ease: Power4
    }, 'a')
    tl.to(play.current,{
      x:"90%",
      ease: Power4
    } ,'a')
    tl.to(reel.current,{
      x:"-90%",
      ease: Power4
    }, 'a') 
  });
  return (
    

    <div ref={parent} className="w-full h-[100vh] overflow-hidden relative bg-black">
    <div ref={videodiv} className="w-40  sm:w-96 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video autoPlay muted loop className="w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://videos.pexels.com/video-files/5908584/5908584-hd_1920_1080_25fps.mp4"></video>
    </div>

      <div className="absolute overlay w-full h-full  text-white flex flex-col justify-between py-20">
        <div className="flex items-center justify-center  gap-2">
          <span>
            <VscDebugBreakpointLog />
          </span>
          <h3>Work in motion</h3>
        </div>
        <h1 className="w-full flex justify-center items-center gap-44 sm:gap-80">
            <div ref={play} className="text-5xl sm:text-8xl font-light ">Play</div>
            <div ref={reel} className="text-5xl sm:text-8xl font-light ">Reel</div>
        </h1>
        <p className="text-center px-10">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </div>
  );
}

export default Playreel;
