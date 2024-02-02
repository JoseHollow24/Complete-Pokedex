import React from 'react'

export default function PokemonDetails ({ pokemonData }){
    if (!pokemonData) {
        return <p>No hay datos de Pokémon</p>;
    }

    return (
         <div>
            <h2>{pokemonData.name}</h2>
            <p>Tipo: {pokemonData.type}</p>
            <p>Habilidades: {pokemonData.abilities.join(', ')}</p>
            {/* Otros detalles del Pokémon según sea necesario */}
        </div>
    )
}
