import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-md mx-auto p-3 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='left flex items-center'>
        <h2>Refokus</h2>
      <div className='links flex gap-7 ml-32'>
        {["Home","Work","Culture","","News"].map((elem,index) =>(
            elem.length == 0 ? <span className='w-0.5 h-10 bg-zinc-800'></span>   : (<a className='text-sm flex items-center gap-1' href="#" >
                {index==1 ? <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span> : ""}
                {elem}
            </a>)  
            
        ))}
      </div>
        </div>
        <div className='right'>
            <Button title={"Get started"} />
        </div>
    </div>
  )
}

export default Navbar;
