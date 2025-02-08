import React from "react";

function PokemonCard({ data }) {
  return (
    <div className="w-[22%] h-[60vh] bg-zinc-200 rounded-[5%]">
      <div className="w-full h-[50%]  px-10 py-5">
          <img className="w-full h-full" src={data.sprites.other.dream_world.front_default} alt="" />
      </div>
      <div className="flex justify-center items-center capitalize text-3xl h-[8%]">
        <h1>{data.name}</h1>
      </div>
      <div className="flex justify-center items-center capitalize text-xl  h-[12%]">
        <h1 className="px-6 py-3 bg-green-300 rounded-full ">{data.types.map((item) => item.type.name).join("  , ")}</h1>
      </div>
      <div className="flex justify-around items-center capitalize text-lg h-[10%] p-5">
        <h2><span className="font-semibold">Attack</span> : {data.stats[1].base_stat}</h2>
        <h2><span className="font-semibold">Defence</span> : {data.stats[2].base_stat}</h2>
        <h2><span className="font-semibold">Speed</span> : {data.stats[5].base_stat}</h2>
      </div>
      <div className="flex justify-around items-center capitalize text-lg h-[10%] p-5">
        <h2><span className="font-semibold">Height </span>: {data.height}</h2>
        <h2><span className="font-semibold">Weight</span> : {data.weight}</h2>
        <h2><span className="font-semibold">Exp</span> : {data.base_experience}</h2>
      </div>
      <div className="flex justify-center items-center capitalize text-2xl h-[10%] p-5 text-orange-400">
        <h2><span className="font-semibold">Ability</span> : <span className="italic">{data.abilities.map((item) => item.ability.name).slice(0,1).join("  , ")}</span></h2>
      </div>

    </div>

  );
}

export default PokemonCard;

// <h1>{data.name}</h1>
// <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.name} />



// <div className="w-[22%] h-[60vh] bg-red-200">
// <div className="w-[100%] h-[40%] mx-auto bg-green-300 p-5 flex justify-center items-center">
//   <img className="w-[70%] h-[60%] object-cover" src={data.sprites.other.dream_world.front_default} alt="" />
// </div>
// <div className="flex justify-center items-center text-2xl bg-green-400  w-[100%] h-[10%] capitalize">
//   <h1>{data.name}</h1>
// </div>
// <div>
//   <h2>Experience : {data.base_experience}</h2>
//   <h2>Height : {data.height}</h2>
//   <h2>Weight : {data.weight}</h2>
//   <p>Type :{data.types.map((item) => item.type.name).join(", ")}</p>
//   <h2>Speed :{data.stats[5].base_stat}</h2>
//   <h2>Attack :{data.stats[1].base_stat} </h2>
//   <h2>Defence : {data.stats[2].base_stat}</h2>
//   <h2>Abilities : {data.abilities.map((item) => item.ability.name).slice(0,1).join("  , ")}</h2>
// </div>

// </div>


// background: rgb(244,246,244);
// background: linear-gradient(90deg, rgba(244,246,244,1) 0%, rgba(244,246,244,1) 38%, rgba(27,255,0,1) 94%);