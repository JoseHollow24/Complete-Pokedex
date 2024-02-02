import React from 'react'

export default function PokemonTypes( { pokemonTypes } ) {
    const typesBg = {
        bug: 'bg-lime-900',
        dark: 'bg-stone-900',
        dragon: 'bg-indigo-700',
        electric: 'bg-amber-400',
        fairy: 'bg-red-200',
        fighting: 'bg-yellow-950',
        fire: 'bg-red-700',
        flying: 'bg-cyan-400',
        ghost: 'bg-indigo-900',
        grass: ' bg-green-500',
        ground: 'bg-yellow-600',
        ice: 'bg-sky-300',
        normal: 'bg-neutral-400',
        poison: 'bg-purple-700',
        psychic: 'bg-red-400',
        rock: 'bg-yellow-800',
        steel: 'bg-neutral-500',
        water: 'bg-sky-700'
    }

  return (
    <>   
        <p className="text-slate-800 font-bold">

            Tipos:
        </p>
         <ul className="flex">
             {
                 pokemonTypes.map((typeItem, index) => (
                     <li className={`${typesBg[typeItem.type.name]} font-bold capitalize mr-4 rounded-2xl py-2 px-4 text-white`} key={index}>
                         <p>{typeItem.type.name}</p>
                     </li>
                 ))
             }
         </ul>
    </>
  )
}
