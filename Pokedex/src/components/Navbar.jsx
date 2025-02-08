import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[10vh] border-b-4 border-t-4 border-black mb-5 flex justify-between items-center p-5 '>
      <h1 className='text-3xl px-10'>Pokedex</h1>
      <div className='flex justify-around w-[40%] text-xl'>
        <h3>Home</h3>
        <h3>Pokemon Game</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  )
}

export default Navbar
