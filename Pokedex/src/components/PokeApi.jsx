import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokeApi() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=40";
  // const API = "https://pokeapi.co/api/v2/pokemon?limit=1302"

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);

      const detailedPokemondata = data.results.map(async (elem) => {
        const response = await fetch(elem.url);
        const data = await response.json();
        return data;
      });
      console.log(detailedPokemondata);

      const detailedResponse = await Promise.all(detailedPokemondata);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);


  const searchData = pokemon.filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()));


  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center  h-[8vh]">
      <h1 className="text-5xl">Let's Catch Pokemon</h1>
      </div>
      <div className="Pokesearch flex justify-center items-center h-[8vh]">
        <input className="h-[5vh] w-[30vh] text-center text-xl border-4 border-black" type="text" placeholder=" Seacrh Pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="w-full min-h-[100vh] flex justify-center flex-wrap gap-8 px-20 py-8">
        {searchData.map((elem, index) => (
          <PokemonCard data={elem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PokeApi;

{
  /* <h1>Helloo pokemon</h1>
<ul>
  {
    pokemon.map((pokemon) => (
      <li key={pokemon.id}>
        <h2>{pokemon.name}</h2>
        <img src= alt={pokemon.name} />
      </li>
    ))

 
  }
</ul> */
}
