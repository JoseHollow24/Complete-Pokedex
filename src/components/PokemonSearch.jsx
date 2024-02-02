'use client'
import { useState } from "react"

export default function PokemonSearch( { onPokemonDataChange } ) {
    const [pokemonName, setPokemonName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        searchPokemon()
    }

    const searchPokemon = async () => {
        try {
            const lowerCasePokemonName = pokemonName.toLowerCase();
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${lowerCasePokemonName}`);
            const data = await response.json();
            onPokemonDataChange(data);
        } catch (error){
            console.log('Error al buscar el pokemon:', error)
        }
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Ingresa el nomrbe del pokémon"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button type="submit" >Buscar Pokemon</button>
            </form>
        </div>
        </>
    )
}
