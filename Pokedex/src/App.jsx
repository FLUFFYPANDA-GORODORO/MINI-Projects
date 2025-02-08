import React from 'react'
import PokeApi from './components/PokeApi'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      
      <Navbar />
      <PokeApi />
    </div>
  )
}

export default App
