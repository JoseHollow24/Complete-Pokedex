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
                    className="block border border-slate-400 border-rounded px-4 py-2 mb-2"
                    placeholder="Ingresa el pokémon"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 active:bg-blue-800 mx-auto" 
                >
                    Buscar Pokemon
                </button>
            </form>
        </div>
        </>
    )
}
