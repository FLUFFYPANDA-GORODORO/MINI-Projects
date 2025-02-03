import React from "react";
import { VscArrowRight } from "react-icons/vsc";
function Card({w,start,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${w}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <VscArrowRight />
        </div>
        <h1 className="text-xl mt-5 font-meduim">Who we are</h1>
      </div>

      <div className="down w-full">
        {start == true ? 
            <div className="mt-32">
            <h1 className="text-4xl font-semibold tracking-tight leading-none">Start a Project</h1>
            <button className="rounded-full border-[1px] border-zinc-200 px-2 py-1 mt-2">Contact us</button>
            </div>
         : <p className="text-xs mt-48">Lorem ipsum dolor sit amet consectetur.</p>}
            
            
      </div>
    </div>
  );
}

export default Card;
