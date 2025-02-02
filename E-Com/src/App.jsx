import React from 'react'
import Home from './Components/Home'
import Detail from './Components/Detail'
import {Link,Routes , Route } from 'react-router-dom'



function App() {
  return (
    <div className='h-screen w-screen flex'>
     
      <Link to="/" className='text-red-300 absolute left-[50%] top-[3%] text-2xl'>Home</Link>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      
    </div>
  )
}

export default App
