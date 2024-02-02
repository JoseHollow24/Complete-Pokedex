import PokemonDetails from '../page'
import React from 'react'

async function loadPokemon(id) {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return(data)
}

async function PokemonDetails({params}) {

    const pokemonSingleData = await loadPokemon(params.pokemonName)
    
    return (
        <div>
            {pokemonSingleData.name}
        </div>
    )
}

export default PokemonDetails
